const express = require('express');
const router = express.Router();

// Controllers
const {
  addMovieRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
  updateMovieAverageRating,
  updateRatings,
} = require('../controllers/moviesRating.controller');

// Movie rating
router.patch('/updateRatings', updateRatings);
router.put('/updateMovieAverageRating/:movieId', updateMovieAverageRating);
router.post('/:movieId', addMovieRating);
router.get('/:movieId', getMovieRatings);
router.put('/:movieId', updateMovieRating);
router.delete('/:movieId', deleteMovieRating);

module.exports = router;
