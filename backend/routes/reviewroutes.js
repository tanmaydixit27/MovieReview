// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/reviews', reviewController.createReview);
router.get('/movies/:movieId/reviews', reviewController.getReviewsByMovieId);

module.exports = router;
