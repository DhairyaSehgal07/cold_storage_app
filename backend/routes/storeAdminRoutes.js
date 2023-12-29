import express from "express";
const router = express.Router();
import { protectStoreAdmin } from "../middleware/authMiddleware.js";
import {
  registerStoreAdmin,
  loginStoreAdmin,
  logoutStoreAdmin,
  getStoreAdminProfile,
  updateStoreAdminProfile,
} from "../controllers/storeAdminController.js";

// Authentication routes
router.post("/register", registerStoreAdmin);
router.post("/login", loginStoreAdmin);
router.post("/logout", logoutStoreAdmin);

router
  .route("/profile")
  .get(protectStoreAdmin, getStoreAdminProfile)
  .put(protectStoreAdmin, updateStoreAdminProfile);

export default router;
