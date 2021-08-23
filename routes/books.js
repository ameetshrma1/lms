const express = require("express");

const {
  getAllBooks,
  addBook,
  editBookById,
  findBookById,
  deleteBookById,
} = require("../controllers/books");

const {verifyUserToken} = require('../middlewares/verifyUserToken')

const router = express.Router();

router.post("/", verifyUserToken, addBook);

router.get("/",verifyUserToken, getAllBooks);

router.patch("/:id", verifyUserToken, editBookById);

router.get("/:id",verifyUserToken, findBookById);

router.delete("/:id",verifyUserToken, deleteBookById);

module.exports = router;
