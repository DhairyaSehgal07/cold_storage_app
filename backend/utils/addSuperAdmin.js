import StoreAdmin from "../models/storeAdminModel.js";
import asyncHandler from "express-async-handler";

const createStoreAdmin = asyncHandler(async (req, res) => {
  const superAdminExists = await StoreAdmin.findOne({
    email: "superadmin@gmail.com",
  });

  if (!superAdminExists) {
    await StoreAdmin.create({
      name: "Super Admin",
      email: "superadmin@gmail.com",
      password: "123456",
      isSuperAdmin: true,
    });
    console.log("Super admin created");
  } else {
    return;
  }
});

export default createStoreAdmin;
