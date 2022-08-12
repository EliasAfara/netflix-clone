import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { useViewport } from '../hooks/useViewport';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { SiImdb } from 'react-icons/si';

import './styles/movieShowcase.scss';
import ReactStars from 'react-rating-stars-component';

// State Context
import useAppStateContext from '../hooks/useAppStateContext';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DisplayMovieRow = ({ title, movies, isLiked = false }) => {
  console.log(movies);
  const [windowDimensions] = useViewport();
  const { width } = windowDimensions;
  const navigate = useNavigate();

  const { appState } = useAppStateContext();

  const [movieRating, setMovieRating] = useState({
    rating: 0,
    comment: 'I like this movie',
    userId: appState.user_id,
  }); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setMovieRating({ ...movieRating, rating: rate });
  };

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
                <div className='ratings flex j-between a-center'>
                  <div>
                    &nbsp;
                    <SiImdb title='IMDB' /> &nbsp;&nbsp;
                    {movieData.averageRating.toFixed(2)}
                  </div>
                  <ReactStars
                    count={5}
                    value={movieData.averageRating}
                    onChange={handleRating}
                    size={24}
                    activeColor='#ffd700'
                  />
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

export default DisplayMovieRow;
