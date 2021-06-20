const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    required: true,
    unique: true,
    type: String,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
