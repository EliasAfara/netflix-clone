const router = express.Router();

// Controllers
const {
  postMovieRating,
  getAllMoviesRating,
  getMovieRatings,
  updateMovieRating,
  deleteMovieRating,
} = require('../controllers/callback');

router.post('/', postMovieRating);
router.get('/', getAllMoviesRating);
router.get('/:id', getMovieRatings);
router.put('/:id', updateMovieRating);
router.delete('/:id', deleteMovieRating);

module.exports = router;
