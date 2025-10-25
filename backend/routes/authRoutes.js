// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Make sure the path is correct

// ===== Registration Route =====
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

// ===== Login Route =====
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trim email just in case
    const trimmedEmail = email.trim();

    const user = await User.findOne({ email: trimmedEmail });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare password exactly
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: "Server error: " + err.message });
  }
});

module.exports = router;