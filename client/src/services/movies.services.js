import axios from 'axios';

export const getAllMovies = async (req, res) => {};

export const getLatestMovies = async (req, res) => {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/movies/latestMovies'
    );
    const movies = response.data;

    return movies;
  } catch (error) {
    console.error(error);
  }
};

export const getRecommendedMovies = async (req, res) => {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/movies/randomRecommendation'
    );
    const movies = response.data;

    return movies;
  } catch (error) {
    console.error(error);
  }
};

export const getTop10MoviesMostPopular = async (req, res) => {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/movies/top10MoviesMostPopular'
    );
    const movies = response.data;

    return movies;
  } catch (error) {
    console.error(error);
  }
};

export const getTop10MoviesMostRated = async (req, res) => {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/movies/top10MoviesMostRated'
    );
    const movies = response.data;

    return movies;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetailsById = async (req, res) => {};
