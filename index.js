const { json } = require("express");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// can be understood as import express from "express"

const app = express();

app.use(express.json());
app.use(cors());

const dbURl = "mongodb://localhost/fourpm";

mongoose.connect(dbURl, { useNewUrlParser: true, useUnifiedTopology: true });

const connectionRef = mongoose.connection;
connectionRef.on("open", () => {
  console.log("connected to DB");
});

const booksRoutes = require("./routes/books");
app.use("/api/books", booksRoutes);
const memberRoutes = require("./routes/member");
app.use("/api/member", memberRoutes);

const userRoutes = require("./routes/users");
app.use("/api/user", userRoutes);

const genreRoutes = require("./routes/genre");
app.use("/api/genre", genreRoutes);

const historyRoutes = require("./routes/history");
app.use("/api/history", historyRoutes);

app.listen(4099, () => {
  console.log("listening to port", 4099);
});
