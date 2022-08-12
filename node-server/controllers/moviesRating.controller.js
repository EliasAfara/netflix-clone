const moviesSchema = require('../models/movies.model');

/**
 * @route    POST | #endpoint: /movies/rating (ex: /movie/{movie_id}/rating)
 * @desc     Rate a movie
 * @access   Private
 * @PathParam {integer} movieid
 * @RequestBody {Object} value/number (This is the value of the rating you want to submit. The value is expected to be between 0.5 and 10.0) (ex: {value: 8.5}) (minimum: 0.5
maximum: 10)
 * @Responses {
 * (201) Created - Movie rating created
 * (400) Bad Request - Invalid request data
 * (401) Unauthorized - Invalid token
 * (404) Not Found - Movie rating not found
 * (500) Internal Server Error - Error while creating movie rating
 * }
 */
const addMovieRating = async (req, res) => {
  console.log(req.body);

  const { movieId } = req.params;

  try {
    const movie = await moviesSchema.findById({ _id: movieId });

    if (!movie) {
      return res.status(404).json({
        message: 'Movie not found',
      });
    }

    let newRatingsList = movie.ratings.push(req.body);

    const movieFields = {
      ...movie,
      ratings: newRatingsList,
      averageRating:
        movie.ratings.reduce((a, b) => a + b.rating, 0) / newRatingsList.length,
    };

    const updatedMovie = await moviesSchema.findByIdAndUpdate(
      { _id: movieId },
      { $set: movieFields },
      { new: true }
    );

    return res.status(201).json(updatedMovie);
  } catch (error) {
    console.log(error);
    res.status(500).send('500 Internal server error');
  }
};

const updateMovieAverageRating = async (req, res) => {
  const { movieId } = req.params;
  console.log(movieId);

  try {
    const movieDetails = await moviesSchema.findById({ _id: movieId });

    if (!movieDetails) {
      return res.status(404).json({
        message: 'Movie not found',
      });
    }

    const movieFields = {
      movie: movieDetails.movie,
      _id: movieDetails._id,
      ratings: movieDetails.ratings,
      __v: movieDetails.__v,
      averageRating:
        movieDetails.ratings.reduce((a, b) => a + b.rating, 0) /
        movieDetails.ratings.length,
    };

    console.log(
      movieDetails.ratings.reduce((a, b) => a + b.rating, 0) /
        movieDetails.ratings.length
    );
    console.log(movieFields);

    const updatedMovie = await moviesSchema.findByIdAndUpdate(
      { _id: movieId },
      { $set: movieFields },
      { new: true }
    );

    return res.status(201).json(updatedMovie);
  } catch (error) {
    console.log(error);
    res.status(500).send('500 Internal server error');
  }
};

const updateRatings = async (req, res) => {
  try {
    await moviesSchema.updateMany(
      {},
      { $set: { averageRating: 0 } },
      { multi: true },
      (err, writeResult) => {}
    );
  } catch (error) {
    console.log(error);
    res.status(500).send('500 Internal server error');
  }
};

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
  addMovieRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
  updateMovieAverageRating,
  updateRatings,
};
