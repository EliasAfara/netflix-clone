const express = require('express');
const router = express.Router();

// Controllers
const {
  getAllMovies,
  addMovie,
  getTop10MoviesMostPopular,
  getLatestMovies,
  getMovieDetailsById,
  getRecommendedMovies,
} = require('../controllers/movies.controller');

const {
  addMovieRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
} = require('../controllers/moviesRating.controller');

// Movie details
router.get('/', getAllMovies);
router.post('/addMovie', addMovie);
router.get('/top10MoviesMostPopular', getTop10MoviesMostPopular);
router.get('/latestMovies', getLatestMovies);
router.get('/randomRecommendation', getRecommendedMovies);
router.get('/:movieId', getMovieDetailsById);

// Movie rating
router.post('/:movieId/rating', addMovieRating);
router.get('/:movieId/rating', getMovieRatings);
router.put('/:movieId/rating', updateMovieRating);
router.delete('/:movieId/rating', deleteMovieRating);

// Trending

module.exports = router;

// Java
// Login
// register
// last seen movie

// node
// new movies
// recommended movies
// top 10 movies most popular
// top 10 movies most viewed

// React
// Header
// Root section
// Sliders section
// user last seen movies
// new movies
// recommended movies
// top 10 movies most popular
// top 10 movies most viewed
