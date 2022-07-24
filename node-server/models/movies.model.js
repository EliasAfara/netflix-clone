const mongoose = require('mongoose');

const moviesRatingSchema = mongoose.Schema({
  movie: {
    themoviedb_movie_id: {
      type: Number,
    },
    title: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    genres: [String],
    movieDirector: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
    },
    backdrop_image: {
      type: String,
      required: true,
    },
  },
  ratings: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Rating', moviesRatingSchema);
