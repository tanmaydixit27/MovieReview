// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/movies', movieController.createMovie);
router.get('/movies', movieController.getMovies);

module.exports = router;
