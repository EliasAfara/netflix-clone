import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import backgroundImage from '../assets/home.jpeg';
import MovieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import Navbar from '../components/Navbar';

import {
  getLatestMovies,
  getRecommendedMovies,
  getTop10MoviesMostPopular,
  getTop10MoviesMostRated,
} from '../services/movies.services';
import Footer from '../components/Footer';
import DisplayMovieRow from '../components/DisplayMovieRow';

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [latestMovies, setLatestMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const [randomContinueWatching, setRandomContinueWatching] = useState([]);

  const [top10MostPopularMovies, setTop10MostPopularMovies] = useState([]);
  const [top10MostMostRated, setTop10MostMostRated] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res1 = await getLatestMovies();
      setLatestMovies(res1.movies);

      const res2 = await getRecommendedMovies();
      setRecommendedMovies(res2.randomMovies);

      const res3 = await getRecommendedMovies();
      setRandomContinueWatching(res3.randomMovies);

      const res4 = await getTop10MoviesMostPopular();
      setTop10MostPopularMovies(res4.movies);

      const res5 = await getTop10MoviesMostRated();
      setTop10MostMostRated(res5.movies);
    })();
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img
          src={backgroundImage}
          alt='background'
          className='background-image'
        />
        <div className='container'>
          <div className='logo'>
            <img src={MovieLogo} alt='Movie Logo' />
          </div>
          <div className='buttons flex'>
            <button
              onClick={() => navigate('/player')}
              className='flex j-center a-center'
            >
              <FaPlay />
              Play
            </button>
            <button className='flex j-center a-center'>
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <DisplayMovieRow
        movies={randomContinueWatching}
        title='Continue Watching'
      />
      <DisplayMovieRow movies={latestMovies} title='Latest Movies' />
      <DisplayMovieRow movies={recommendedMovies} title='Recommended Movies' />
      <DisplayMovieRow
        movies={top10MostPopularMovies}
        title='Top 10 Most Popular Movies'
      />
      <DisplayMovieRow
        movies={top10MostMostRated}
        title='Top 10 Most Rated Movies'
      />

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
export default Netflix;
