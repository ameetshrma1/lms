const express = require("express");

const {
  getAllBooks,
  addBook,
  editBookById,
  findBookById,
  deleteBookById,
} = require("../controllers/books");

const router = express.Router();

router.post("/", addBook);

router.get("/", getAllBooks);

router.patch("/:id", editBookById);

router.get("/:id", findBookById);

router.delete("/:id", deleteBookById);

module.exports = router;
