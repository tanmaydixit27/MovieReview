// // controllers/movieController.js
// const Movie = require('../models/movieModel');

// // Create Movie
// exports.createMovie = (req, res) => {
//   const { name, releaseDate } = req.body;
//   Movie.create(name, releaseDate, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.status(201).json(result);
//   });
// };

// // Get All Movies
// exports.getMovies = (req, res) => {
//   Movie.getAll((err, results) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(results);
//   });
// };

// // Other CRUD operations can go here...



const Movie = require('../models/movieModel');

// Create a new movie
exports.createMovie = async (req, res) => {
  console.log("Req", req)
  try {
    const { name, releaseDate, rating, genre, description } = req.body;
    const newMovie = await Movie.create({ name, releaseDate, rating, genre, description });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a movie by ID
exports.updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a movie by ID
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
