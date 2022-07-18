const axios = require('axios');
const fs = require('fs');

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '188b7a634ced02a1014a34eb8217531f';

const getGenres = async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return genres;
};

const getMovieDirector = async (movie_id) => {
  try {
    const {
      data: { crew },
    } = await axios.get(
      `${TMDB_BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
    );

    const director = crew.find(({ job }) => job === 'Director');
    return director.name;
  } catch (error) {}
};

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach(async (movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });

    const movieDirector = await getMovieDirector(movie.id);
    if (
      movie.backdrop_path &&
      movieDirector &&
      typeof movie.release_date !== 'undefined' &&
      movieGenres.length > 0
    ) {
      moviesArray.push({
        themoviedb_movie_id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        popularity: movie.popularity,
        release_date: movie.release_date,
        director: movieDirector,
        genres: movieGenres.slice(0, 3),
      });
    }
  });
};

const getRawData = async (api, paging = true) => {
  const genres = await getGenres();
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 200 && i < 30; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ''}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

const fetchMovies = async () => {
  const data = await getRawData(
    `${TMDB_BASE_URL}/trending/all/week?api_key=${API_KEY}`
  );
  console.log(data);
  fs.writeFile('moviesData.json', JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log('complete');
  });
};

fetchMovies();
