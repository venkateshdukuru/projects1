import db from "../config/database.js";
import bcrypt from "bcrypt";
import env from "dotenv";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

env.config();

// ========================== TRANSPORTER ==========================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ========================== HELPERS ==========================
const sendVerificationEmail = async (fullName, email, token) => {
  const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your account",
    html: `
      <h2>Welcome to ProjectsPlace 👋</h2>
      <p>Hi ${fullName},</p>
      <p>Click the link below to verify your email:</p>
      <a href="${verificationLink}" target="_blank">Verify Email</a>
      <p>This link will expire in 1 hour.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// ========================== REGISTER ==========================
export const Register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, phone_number } = req.body;

    if (!fullName || !email || !password || !confirmPassword || !phone_number) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const existingUser = await db.query("SELECT email FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists, try login!" });
    }

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALTROUNDS));

    const newUser = await db.query(
      `INSERT INTO users (email, full_name, password, phone_number, verified) 
       VALUES ($1, $2, $3, $4, false) RETURNING email, full_name, phone_number, verified`,
      [email, fullName, hashedPassword, phone_number]
    );

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    await sendVerificationEmail(fullName, email, token);

    return res.status(201).json({
      message: "Registration successful. Verification email sent.",
      userData: newUser.rows[0],
    });

  } catch (err) {
    console.error("❌ Register Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ========================== VERIFY EMAIL ==========================
export const VerifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: "Token is required." });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token." });
    }

    const email = decoded.email;
    const updatedUser = await db.query(
      `UPDATE users SET verified = true WHERE email = $1 AND verified = false 
       RETURNING email, full_name, phone_number, verified`,
      [email]
    );

    if (updatedUser.rows.length === 0) {
      return res.status(400).json({ message: "User already verified or does not exist." });
    }

    return res.status(200).json({
      message: "Email verified successfully!",
      userData: updatedUser.rows[0],
    });

  } catch (err) {
    console.error("❌ VerifyEmail Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ========================== LOGIN ==========================
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const userQuery = await db.query("SELECT email, password, verified FROM users WHERE email = $1", [email]);
    if (userQuery.rows.length === 0) {
      return res.status(400).json({ message: "Email doesn't exist, please register!" });
    }

    const user = userQuery.rows[0];
    if (!user.verified) {
      return res.status(400).json({ message: "Account not verified. Please check your email." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    const authToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      message: "Login successful.",
      userData: { email: user.email, verified: user.verified },
      token: authToken,
    });

  } catch (err) {
    console.error("❌ Login Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ========================== LOGOUT ==========================
export const Logout = (req, res) => {
  return res.status(200).json({ message: "Logout successful. Token should be cleared client-side." });
};
