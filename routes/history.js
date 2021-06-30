const express = require("express");

const router = express.Router();

const { saveHistory } = require("../controllers/history");

router.post("/", saveHistory);

module.exports = router;
