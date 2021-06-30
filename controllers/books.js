const express = require("express");
const Book = require("../models/book");

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find().populate("category");
    res.send({
      data: allBooks,
    });
  } catch (err) {
    res.send({
      error: err,
    });
  }
};

exports.addBook = async (req, res) => {
  console.log(req.body);
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
  });

  try {
    const savedBook = await book.save();
    res.json({
      message: "book saved",
      data: savedBook,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.editBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    book.title = req.body.title;
    book.author = req.body.author;
    book.category = req.body.category;
    const savedBook = await book.save();
    res.json({
      message: "edit Successful",
      savedBook: savedBook,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.findBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    res.status(200).json({
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      message: "An error occured",
      error: err,
    });
  }
};

exports.deleteBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    res.json({
      message: "delete successful",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
