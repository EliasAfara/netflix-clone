import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className='player'>
        <div className='back'>
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/Z8WOAsDuwhU'
          title="Stranger Things 4 - Official Clip | Eleven's Powers"
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
  }
`;
