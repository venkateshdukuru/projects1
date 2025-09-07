import { Register, Login, VerifyEmail } from "../controllers/authController.js";

import express from "express";
const router = express.Router();

// Register
router.post("/register", Register);

// Verify email (via token link)
router.get("/verify-email", VerifyEmail);

// Login
router.post("/login", Login);

export default router;
