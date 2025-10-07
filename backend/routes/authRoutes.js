const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Placeholder for OTP sending and verification
const sendOtp = async (phone) => {
  // User-provided OTP API will replace this
  console.log(`OTP sent to ${phone}`);
  return '123456'; // Mock OTP for testing
};

const verifyOtp = (sentOtp, receivedOtp) => {
  return sentOtp === receivedOtp; // Replace with real verification
};

// Register
router.post('/register', async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    let user = await User.findOne({ phone });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, phone, email });
    await user.save();

    const otp = await sendOtp(phone);
    res.json({ msg: 'OTP sent', userId: user._id, otp }); // Remove otp in production
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Verify OTP for Register
router.post('/verify-otp-register', async (req, res) => {
  const { userId, otp } = req.body;
  try {
    if (verifyOtp('123456', otp)) { // Replace with real OTP verification
      const user = await User.findById(userId);
      if (!user) return res.status(400).json({ msg: 'User not found' });

      const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, user: { id: user._id, name: user.name, phone: user.phone, email: user.email } });
    } else {
      res.status(400).json({ msg: 'Invalid OTP' });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Send OTP for Login
router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const otp = await sendOtp(phone);
    res.json({ msg: 'OTP sent', userId: user._id, otp }); // Remove otp in production
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Verify OTP for Login
router.post('/verify-otp', async (req, res) => {
  const { userId, otp } = req.body;
  try {
    if (verifyOtp('123456', otp)) { // Replace with real OTP verification
      const user = await User.findById(userId);
      if (!user) return res.status(400).json({ msg: 'User not found' });

      const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, user: { id: user._id, name: user.name, phone: user.phone, email: user.email } });
    } else {
      res.status(400).json({ msg: 'Invalid OTP' });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get User Profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Update Profile
router.put('/update-profile', auth, async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;