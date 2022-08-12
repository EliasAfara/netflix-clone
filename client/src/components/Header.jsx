import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <StyledHeader className='flex a-center j-between'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      {props.login ? (
        <button onClick={() => navigate('/login')}>Sign In</button>
      ) : (
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      )}
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
