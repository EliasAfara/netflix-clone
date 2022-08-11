const express = require('express');
const router = express.Router();

// Controllers
const {
  addMovieRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
} = require('../controllers/moviesRating.controller');

// Movie rating
router.post('/:movieId', addMovieRating);
router.get('/:movieId', getMovieRatings);
router.put('/:movieId', updateMovieRating);
router.delete('/:movieId', deleteMovieRating);

module.exports = router;
