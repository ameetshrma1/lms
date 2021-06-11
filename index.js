const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
// can be understood as import express from "express"

const {
  getAllBooks,
  addBook,
  editBookById,
  findBookById,
} = require("./controllers/books");

const app = express();

app.use(express.json());

const dbURl = "mongodb://localhost/fourpm";

mongoose.connect(dbURl, { useNewUrlParser: true });

const connectionRef = mongoose.connection;
connectionRef.on("open", () => {
  console.log("connected to DB");
});

const Book = require("./models/book");

app.post("/api/book", addBook);

app.get("/api/book", getAllBooks);

app.patch("/api/book/:id", editBookById);

app.get("/api/book/:id", findBookById);

app.listen(4099, () => {
  console.log("listening to port", 4099);
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from get request!!",
  });
});
