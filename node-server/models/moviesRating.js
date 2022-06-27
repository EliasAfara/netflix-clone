import mongoose from 'mongoose';

const moviesRatingSchema = mongoose.Schema({
  movie: {
    title: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    movieDirector: {
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
      commentTitle: {
        type: String,
        required: true,
      },
      commentContent: {
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

export default mongoose.model('Rating', moviesRatingSchema);
