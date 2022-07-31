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
} from '../services/movies.services';
import CardSlider from '../components/CardSlider';
import Footer from '../components/Footer';
import DisplayMovieRow from '../components/DisplayMovieRow';

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [latestMovies, setLatestMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [top10MostPopularMovies, setTop10MostPopularMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res1 = await getLatestMovies();
      console.log(res1);
      setLatestMovies(res1.movies);

      const res2 = await getRecommendedMovies();
      console.log(res2);
      setRecommendedMovies(res2.randomMovies);

      const res3 = await getTop10MoviesMostPopular();
      setTop10MostPopularMovies(res3.movies);
    })();
  }, []);

  console.log(latestMovies);

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
      <DisplayMovieRow movies={latestMovies} title='Latest Movies' />
      <DisplayMovieRow movies={recommendedMovies} title='Recommended Movies' />
      <DisplayMovieRow
        movies={top10MostPopularMovies}
        title='Top 10 Most Popular Movies'
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
