// controllers/movieController.js
const Movie = require('../models/movieModel');

// Create Movie
exports.createMovie = (req, res) => {
  const { name, releaseDate } = req.body;
  Movie.create(name, releaseDate, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};

// Get All Movies
exports.getMovies = (req, res) => {
  Movie.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Other CRUD operations can go here...
