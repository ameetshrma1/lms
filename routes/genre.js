const express = require("express");

const router = express.Router();

const {
  getAllGenre,
  getGenreById,
  addGenre,
  editGenre,
  deleteGenre,
} = require("../controllers/genre");
const { verifyUserToken } = require("../middlewares/verifyUserToken");

router.get("/", getAllGenre);

router.get("/:id", getGenreById);

router.post("/", verifyUserToken, addGenre);

router.patch("/:id", editGenre);

router.delete("/:id", deleteGenre);

module.exports = router;
