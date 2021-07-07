const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { email, password, fullName } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(15));

  const user = new User({
    email,
    password: hashedPassword,
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
    const checkPassword = bcryptjs.compareSync(password, user.password);

    if (checkPassword) {
      var token = jwt.sign({ id: user._id }, "SECRET KEY", {
        expiresIn: 6 * 60 * 60, //in seconds
      });
      res.json({
        message: "validation Successfull! User login done!",
        token,
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
