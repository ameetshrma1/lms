const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    required: true,
    type: mongoose.Schema.ObjectId,
    ref: "Genre",
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("book", bookSchema);
