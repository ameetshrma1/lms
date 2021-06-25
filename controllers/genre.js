const express = require("express");
const Genre = require("../models/genre");

exports.getAllGenre = async (req, res) => {
  try {
    const allgenre = await Genre.find();
    res.json({
      data: allgenre,
    });
  } catch (error) {
    res.json({
      errorMessage: error,
    });
  }
};

exports.getGenreById = async (req, res) => {
  const id = req.params.id;
  try {
    const selectedgenre = await Genre.findById(id);
    res.json({
      data: selectedgenre,
    });
  } catch (error) {
    res.json({
      errorMessage: error,
    });
  }
};

exports.addGenre = async (req, res) => {
  const genre = new Genre({
    genre: req.body.genre,
  });
  try {
    const savegenre = await genre.save();
    res.json({
      message: "Genre Saved Successfully",
    });
  } catch (error) {
    res.json({
      errorMessage: error,
    });
  }
};

exports.editGenre = async (req, res) => {
  const id = req.params.id;
  try {
    const genre = await Genre.findById(id);
    genre.genre = req.body.genre;
    const editedGenre = await genre.save();
    res.json({
      message: "Edit Succesful",
    });
  } catch (error) {
    res.json({
      errorMessage: error,
    });
  }
};

exports.deleteGenre = async (req, res) => {
  const id = req.params.id;
  try {
    const deletegenre = await Genre.findByIdAndDelete(id);
    res.json({
      message: "Delete Succesful",
    });
  } catch (error) {
    res.json({
      errorMessage: error,
    });
  }
};
