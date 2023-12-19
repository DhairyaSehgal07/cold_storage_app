import express from "express";
const router = express.Router();

// Authentication routes
router.get("/", (req, res) => {
  res.json({
    status: "success",
    messagae: "Register route",
  });
});

export default router;
