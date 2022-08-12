const moviesSchema = require('../models/movies.model');

/**
 * @route    GET | #endpoint: /
 * @desc     get all movies
 * @access   Private
 *
 */
const getAllMovies = async (req, res) => {
  try {
    let movies = await moviesSchema.find();

    if (!movies) {
      return res.status(404).json({
        message: 'No movies',
      });
    }

    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal server error');
  }
};

const addMovie = async (req, res) => {
  const {
    themoviedb_movie_id,
    title,
    image,
    popularity,
    release_date,
    director,
    genres,
  } = req.body;

  try {
    const movie = await moviesSchema.create({
      movie: {
        themoviedb_movie_id,
        title,
        releaseDate: release_date,
        genres,
        movieDirector: director,
        backdrop_image: image,
        popularity,
      },
    });

    res.status(201).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('500 Internal server error');
  }
};

const getMovieDetailsById = async (req, res) => {
  try {
    const { movieId } = req.params;
    let movie = await moviesSchema.findById(movieId);

    if (!movie) {
      return res.status(404).json({
        message: 'No movie found',
      });
    }

    res.status(200).json({ movie });
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal server error');
  }
};

// new movies
const getLatestMovies = async (req, res) => {
  try {
    const sortByNewest = { 'movie.releaseDate': -1 };
    let movies = await moviesSchema.find().sort(sortByNewest).limit(20);

    if (!movies) {
      return res.status(404).json({
        message: 'No movies',
      });
    }

    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal server error');
  }
};

// recommended movies
const getRecommendedMovies = async (req, res) => {
  try {
    let randomMovies = await moviesSchema.aggregate([
      { $sample: { size: 20 } },
    ]);

    if (!randomMovies) {
      return res.status(404).json({
        message: 'No movies',
      });
    }

    res.status(200).json({ randomMovies });
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal server error');
  }
};

// top 10 movies most popular
const getTop10MoviesMostPopular = async (req, res) => {
  try {
    const sortByPopularity = { 'movie.popularity': -1 };
    let movies = await moviesSchema.find().sort(sortByPopularity).limit(10);

    if (!movies) {
      return res.status(404).json({
        message: 'No movies',
      });
    }

    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal server error');
  }
};

// top 10 movies most rated
const getTop10MoviesMostRated = async (req, res) => {
  try {
    const sortByMostRated = { averageRating: -1 };
    let movies = await moviesSchema.find().sort(sortByMostRated).limit(10);

    if (!movies) {
      return res.status(404).json({
        message: 'No movies',
      });
    }

    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).send('500 Internal server error');
  }
};

// top 10 movies most viewed
const getTop10MoviesMostViewed = async (req, res) => {};

// export controller functions
module.exports = {
  getAllMovies,
  addMovie,
  getTop10MoviesMostPopular,
  getLatestMovies,
  getMovieDetailsById,
  getRecommendedMovies,
  getTop10MoviesMostRated,
};
