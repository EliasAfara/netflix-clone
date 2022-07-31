import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

//firebase
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { firebaseAuth } from '../utils/firebase-config';

const initialState = {
  email: '',
  password: '',
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState(initialState);
  const { email, password } = formValues;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignin = async () => {
    try {
      // await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) navigate('/');
  // });

  return (
    <Container>
      <BackgroundImage showPassword={showPassword} />
      <div className='content'>
        <Header login />
        <div className='body flex column a-center j-center'>
          <div className='text flex column'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h5>Watch anywhere, Cancel anytime.</h5>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className='form'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={handleChange}
            />
            {showPassword && (
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleChange}
              />
            )}

            {!showPassword && (
              <>
                <button onClick={() => setShowPassword(true)}>
                  Get Started
                </button>
              </>
            )}
          </div>
          {showPassword && <button onClick={handleSignin}>Sign up</button>}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15ch 85vh;
  }
  .body {
    gap: 1rem;
    text-align: center;
    font-size: 2rem;
    h1{
        padding: 0 25rem;
    }
    h5{
      margin: 2rem auto
    }

    .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? '1fr 1fr' : '2fr 1fr'};
        width: 60%;
        input{
        border: none;
        padding 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
            outline: none;
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
`;
