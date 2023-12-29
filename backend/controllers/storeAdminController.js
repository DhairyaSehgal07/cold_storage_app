import asyncHandler from "express-async-handler";
import StoreAdmin from "../models/storeAdminModel.js";
import generateToken from "../utils/generateToken.js";

//////////Authentication Routes///////////////////////
//@desc Register storeAdmin
//route POST /api/storeAdmin/register
//@access Public
const registerStoreAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const storeAdminExists = await StoreAdmin.findOne({ email });

  if (storeAdminExists) {
    res.status(400);
    throw new Error("storeAdmin already exists");
  }

  const storeAdmin = await StoreAdmin.create({
    name,
    email,
    password,
  });

  if (storeAdmin) {
    generateToken(res, storeAdmin._id);
    res.status(201).json({
      id: storeAdmin._id,
      name: storeAdmin.name,
      email: storeAdmin.email,
      password: storeAdmin.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc login storeAdmin
//route POST/api/storeAdmin/login
//@access Public
const loginStoreAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const storeAdmin = await StoreAdmin.findOne({ email });

  if (storeAdmin && (await storeAdmin.matchPassword(password))) {
    generateToken(res, storeAdmin._id);
    res.status(200).json({
      id: storeAdmin._id,
      name: storeAdmin.name,
      email: storeAdmin.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc logout storeAdmin
//route POST/api/storeAdmin/logout
//@access Public

const logoutStoreAdmin = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    status: "success",
    message: "User logged out",
  });
});

//@desc gets the logged in storeAdmin's profile
//route GET/api/storeAdmin/profile
//@access Private

const getStoreAdminProfile = asyncHandler(async (req, res) => {
  const storeAdmin = {
    _id: req.storeAdmin._id,
    name: req.storeAdmin.name,
    email: req.storeAdmin.email,
  };
  res.status(200).json(storeAdmin);
});

//@desc Updates the logged in storeAdmin's profile
//route PUT/api/farmers/profile
//@access Private

const updateStoreAdminProfile = asyncHandler(async (req, res) => {
  const storeAdmin = await StoreAdmin.findById(req.storeAdmin._id);

  if (storeAdmin) {
    storeAdmin.name = req.body.name || storeAdmin.name;
    storeAdmin.address = req.body.address || storeAdmin.address;
    storeAdmin.email = req.body.email || storeAdmin.email;

    if (req.body.password) {
      storeAdmin.password = req.body.password;
    }

    const updatedStoreAdmin = await storeAdmin.save();

    res.status(200).json({
      _id: updatedStoreAdmin._id,
      name: updatedStoreAdmin.name,
      email: updatedStoreAdmin.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  registerStoreAdmin,
  loginStoreAdmin,
  logoutStoreAdmin,
  getStoreAdminProfile,
  updateStoreAdminProfile,
};
