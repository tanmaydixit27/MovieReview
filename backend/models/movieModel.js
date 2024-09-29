const mongoose = require('mongoose');

// Movie schema definition
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10 },
}, { timestamps: true });

const Movie = mongoose.model('movies', movieSchema, 'movies');

module.exports = Movie;

