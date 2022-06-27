/**
 * @route    POST | #endpoint: /movies/rating
 * @desc     Create a movie rating
 * @access   Private
 */
const postMovieRating = async (req, res) => {};

/**
 * @route    GET | #endpoint: /movies/rating
 * @desc     Create a movie rating
 * @access   Private
 */
const getAllMoviesRating = async (req, res) => {};

/**
 * @route    GET | #endpoint: /movies/rating
 * @desc     Get a movie rating by its id
 * @access   Private
 */
const getMovieRatings = async (req, res) => {};

/**
 * @route    PUT | #endpoint: /movies/rating
 * @desc     Update a movie rating by its id
 * @access   Private
 */
const updateMovieRating = async (req, res) => {};

/**
 * @route    DELETE | #endpoint: /movies/rating
 * @desc     Delete a movie rating by its id
 * @access   Private
 */
const deleteMovieRating = async (req, res) => {};

// export controller functions
module.exports = {
  postMovieRating,
  getAllMoviesRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
};
