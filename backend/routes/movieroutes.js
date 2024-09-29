// // routes/movieRoutes.js
// const express = require('express');
// const router = express.Router();
// const movieController = require('../controllers/movieController');

// router.post('/movies', movieController.createMovie);
// router.get('/movies', movieController.getMovies);

// module.exports = router;



const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

// console.log("heloo")

// Routes
router.post('/movies', movieController.createMovie);
router.get('/movies', movieController.getAllMovies);
router.get('/movies/:id', movieController.getMovieById);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
