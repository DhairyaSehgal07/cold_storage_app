import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  loginFarmer,
  registerFarmer,
  logoutFarmer,
  getFarmerProfile,
  updateFarmerProfile,
} from "../controllers/farmerController.js";

// Authentication routes//
router.post("/register", registerFarmer);
router.post("/login", loginFarmer);
router.post("/logout", logoutFarmer);
router
  .route("/profile")
  .get(protect, getFarmerProfile)
  .put(protect, updateFarmerProfile);

//Function routes

export default router;
