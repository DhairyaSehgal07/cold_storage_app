import asyncHandler from "express-async-handler";
import Farmer from "../models/farmerModel.js";
import generateToken from "../utils/generateToken.js";

/////////AUTHENTICATION ROUTES //////////////////////
//@desc Register farmer
//route POST/api/farmers/register
//@access Public
const registerFarmer = asyncHandler(async (req, res) => {
  const { name, address, phone, email, password } = req.body;

  const farmerExists = await Farmer.findOne({ email });

  if (farmerExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const farmer = await Farmer.create({
    name,
    address,
    phone,
    email,
    password,
  });

  if (farmer) {
    generateToken(res, farmer._id);
    res.status(201).json({
      id: farmer._id,
      name: farmer.name,
      address: farmer.address,
      phone: farmer.phone,
      email: farmer.email,
      password: farmer.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc login farmer
//route POST/api/farmers/login
//@access Public
const loginFarmer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const farmer = await Farmer.findOne({ email });

  if (farmer && (await farmer.matchPassword(password))) {
    generateToken(res, farmer._id);
    res.status(200).json({
      id: farmer._id,
      name: farmer.name,
      email: farmer.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc logout farmer
//route POST/api/farmers/logout
//@access Public
const logoutFarmer = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    status: "success",
    message: "User logged out",
  });
});

//@desc Gets the logged in farmer's profile
//route GET/api/farmers/profile
//@access Private

const getFarmerProfile = asyncHandler(async (req, res) => {
  console.log(req.farmer);
  const farmer = {
    _id: req.farmer._id,
    name: req.farmer.name,
    address: req.farmer.address,
    phone: req.farmer.phone,
    email: req.farmer.email,
  };
  res.status(200).json(farmer);
});

//@desc Updates the logged in farmer's profile
//route PUT/api/farmers/profile
//@access Private

const updateFarmerProfile = asyncHandler(async (req, res) => {
  const farmer = await Farmer.findById(req.farmer._id);

  if (farmer) {
    farmer.name = req.body.name || farmer.name;
    farmer.address = req.body.address || farmer.address;
    farmer.phone = req.body.phone || farmer.phone;
    farmer.address = req.body.address || farmer.address;
    farmer.email = req.body.email || farmer.email;

    if (req.body.password) {
      farmer.password = req.body.password;
    }

    const updatedFarmer = await farmer.save();

    res.status(200).json({
      _id: updatedFarmer._id,
      name: updatedFarmer.name,
      address: updatedFarmer.address,
      phone: updatedFarmer.phone,
      email: updatedFarmer.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
/////////////////////FUNCTIONS ROUTES //////////////////

export {
  loginFarmer,
  registerFarmer,
  logoutFarmer,
  getFarmerProfile,
  updateFarmerProfile,
};
