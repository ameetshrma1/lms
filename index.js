const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
// can be understood as import express from "express"

const app = express();

app.use(express.json());

const dbURl = "mongodb://localhost/fourpm";

mongoose.connect(dbURl, { useNewUrlParser: true });

const connectionRef = mongoose.connection;
connectionRef.on("open", () => {
  console.log("connected to DB");
});

const booksRoutes = require("./routes/books");
app.use("/api/books", booksRoutes);

app.listen(4099, () => {
  console.log("listening to port", 4099);
});
