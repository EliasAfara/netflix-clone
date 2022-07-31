import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import styled from 'styled-components';

import { useViewport } from '../hooks/useViewport';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';

import './styles/movieShowcase.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DisplayMovieRow = ({ title, movies, isLiked = false }) => {
  console.log(movies);
  const [windowDimensions] = useViewport();
  const { width } = windowDimensions;
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <h1 className='movieShowcase__heading'>{title}</h1>
      <Swiper
        className='movieShowcase__container'
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        loopAdditionalSlides={
          width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
        }
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >
        {movies.map((movieData, idx) => (
          <SwiperSlide
            key={idx}
            className={'movieShowcase__container--movie__netflix'}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.movie.backdrop_image}`}
              className='movieShowcase__container--movie-image'
              alt={`${movieData.movie.title} poster`}
            />
            <div className='movieShowcase__container--movie-hover'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.movie.backdrop_image}`}
                alt='card'
                className='movieShowcase__container--movie-hover-image'
                onClick={() => navigate('/player')}
              />
              <div className='movieShowcase__container--movie-hover-info-container flex column'>
                <h3 className='name' onClick={() => navigate('/player')}>
                  {movieData.movie.title}
                </h3>
                <div className='icons flex j-between'>
                  <div className='controls flex'>
                    <IoPlayCircleSharp
                      title='Play'
                      onClick={() => navigate('/player')}
                    />
                    <RiThumbUpFill title='Like' />
                    <RiThumbDownFill title='Dislike' />
                    {isLiked ? (
                      <BsCheck
                        title='Remove from List'
                        onClick={() => {
                          console.log('removeMovieFromLiked');
                        }}
                      />
                    ) : (
                      <AiOutlinePlus
                        title='Add to my list'
                        onClick={() => {
                          console.log('addToList');
                        }}
                      />
                    )}
                  </div>
                  <div className='info'>
                    <BiChevronDown title='More Info' />
                  </div>
                </div>
                <div className='genres flex'>
                  <ul className='flex'>
                    {movieData.movie.genres.map((genre) => (
                      <li>{genre}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;

export default DisplayMovieRow;
