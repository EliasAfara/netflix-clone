const express = require('express');
const router = express.Router();

// Controllers
const {
  postMovieRating,
  getAllMoviesRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
} = require('../controllers/moviesRating');

// '/movie/{movie_id}/rating'
router.post('/:id/rating', postMovieRating);
router.get('/rating', getAllMoviesRating);
router.get('/:id/rating', getMovieRatings);
router.put('/:id/rating', updateMovieRating);
router.delete('/:id/rating', deleteMovieRating);

module.exports = router;
