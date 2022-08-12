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
  getTop10MoviesMostRated,
} = require('../controllers/movies.controller');

// Movie details
router.get('/', getAllMovies);
router.post('/addMovie', addMovie);
router.get('/top10MoviesMostPopular', getTop10MoviesMostPopular);
router.get('/top10MoviesMostRated', getTop10MoviesMostRated);
router.get('/latestMovies', getLatestMovies);
router.get('/randomRecommendation', getRecommendedMovies);
router.get('/:movieId', getMovieDetailsById);

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
