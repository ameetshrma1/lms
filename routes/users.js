const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, fullName } = req.body;
  const user = new User({
    email,
    password,
    fullName,
  });
  try {
    const savedUser = await user.save();
    res.json({
      message: "User registered Successfully!",
      user: savedUser,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user.password === password) {
      res.json({
        message: "validation Successfull! User login done!",
      });
    } else {
      res.json({
        message: "Passwords dont match!",
      });
    }
  } catch (err) {
    res.json({
      error: err,
    });
  }
});

module.exports = router;
