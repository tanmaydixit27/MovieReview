
const movieReview = require('../models/reviewModel');

// Create a new movie
exports.createMovieReview = async (req, res) => {
  console.log("Req", req)
  try {
    const { name, releaseDate, rating } = req.body;
    const newMovie = await movieReview.create({ name, releaseDate, rating });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all movies
exports.getAllMoviesReview = async (req, res) => {
  try {
    const movies = await movieReview.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a movie by ID
exports.getMovieReviewById = async (req, res) => {
  try {
    const movie = await movieReview.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a movie by ID
exports.updateMovieReview = async (req, res) => {
  try {
    const updatedMovieReview = await movieReview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovieReview) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a movie by ID
exports.deleteMovieReview = async (req, res) => {
  try {
    const deletedMovieReview = await movieReview.findByIdAndDelete(req.params.id);
    if (!deletedMovieReview) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
