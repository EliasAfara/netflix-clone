import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

// State Context
import useAppStateContext from '../hooks/useAppStateContext';

// login function
import { login } from '../services/accounts.services';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useAppStateContext();

  const handleLogin = async () => {
    try {
      login({ username, password }, dispatch, navigate);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <Container>
      <BackgroundImage />
      <div className='content'>
        <Header />
        <div className='form-container flex column a-center j-center'>
          <div className='form flex column a-center j-center'>
            <div className='title'>
              <h3>Login</h3>
            </div>
            <div className='container flex column'>
              <input
                type='text'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
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
        }
      }
    }
  }
`;

export default Login;
