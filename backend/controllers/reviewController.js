// controllers/reviewController.js
const Review = require('../models/reviewModel');

// Create Review
exports.createReview = (req, res) => {
  const { movieId, reviewer, rating, comment } = req.body;
  Review.create(movieId, reviewer, rating, comment, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};

// Get Reviews by Movie ID
exports.getReviewsByMovieId = (req, res) => {
  const { movieId } = req.params;
  Review.getByMovieId(movieId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
