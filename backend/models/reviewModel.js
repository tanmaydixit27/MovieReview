// models/reviewModel.js
const db = require('../config/db');

const Review = {
  create: (movieId, reviewer, rating, comment, callback) => {
    const query = 'INSERT INTO reviews (movieId, reviewer, rating, comment) VALUES (?, ?, ?, ?)';
    db.query(query, [movieId, reviewer, rating, comment], callback);
  },
  getByMovieId: (movieId, callback) => {
    const query = 'SELECT * FROM reviews WHERE movieId = ?';
    db.query(query, [movieId], callback);
  },
  // Additional methods for reviews (delete, etc.) go here
};

module.exports = Review;
