import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

// State Context
import useAppStateContext from '../hooks/useAppStateContext';

// login function
import { register } from '../services/accounts.services';

const initialState = {
  email: '',
  password: '',
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState(initialState);

  const [contactFormValues, setContactFormValues] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    username: '',
  });

  const [showContactForm, setShowContactForm] = useState(false);

  const { dispatch } = useAppStateContext();

  const { email, password } = formValues;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactFormChange = (e) => {
    setContactFormValues({
      ...contactFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpForm = () => {
    if (email !== '' || password !== '') {
      setShowContactForm(true);
    }
  };

  const handleSignUp = async () => {
    register(
      {
        username: contactFormValues.username,
        password,
        role: 'user',
        contact: {
          first_name: contactFormValues.first_name,
          last_name: contactFormValues.last_name,
          date_of_birth: contactFormValues.date_of_birth,
          gender: contactFormValues.gender,
          contact_email: email,
        },
      },
      dispatch,
      navigate
    );
    // console.log({
    //   username: contactFormValues.username,
    //   password,
    //   role: 'user',
    //   contact: {
    //     first_name: contactFormValues.first_name,
    //     last_name: contactFormValues.last_name,
    //     date_of_birth: contactFormValues.date_of_birth,
    //     gender: contactFormValues.gender,
    //     contact_email: email,
    //   },
    // });
  };

  return (
    <Container>
      <BackgroundImage showPassword={showPassword} />
      <div className='content'>
        <Header login />
        <div className='body flex column a-center j-center'>
          {!showContactForm ? (
            <>
              <div className='text flex column'>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h5>Watch anywhere, Cancel anytime.</h5>
                <h6>
                  Ready to watch? Enter your email to create or restart
                  membership
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
              {showPassword && <button onClick={handleSignUpForm}>Next</button>}
            </>
          ) : (
            <div className='form-container flex column a-center j-center'>
              <div className='form flex column a-center j-center'>
                <div className='container flex column'>
                  <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={handleContactFormChange}
                    value={contactFormValues['username']}
                  />

                  <input
                    type='text'
                    placeholder='First Name'
                    name='first_name'
                    onChange={handleContactFormChange}
                    value={contactFormValues['first_name']}
                  />

                  <input
                    type='text'
                    placeholder='Last Name'
                    name='last_name'
                    onChange={handleContactFormChange}
                    value={contactFormValues['last_name']}
                  />

                  <input
                    type='date'
                    placeholder='Date of Birth'
                    name='date_of_birth'
                    onChange={handleContactFormChange}
                    value={contactFormValues['date_of_birth']}
                  />

                  <select
                    name='gender'
                    onChange={(e) => {
                      setContactFormValues({
                        ...contactFormValues,
                        gender: e.target.value,
                      });
                    }}
                    value={contactFormValues['gender']}
                  >
                    <option disabled>Select your gender...</option>

                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>

                  <button onClick={handleSignUp}>Sign Up</button>
                </div>
              </div>
            </div>
          )}
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

        select {
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
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        display: block;
        padding: 3rem;
        background-color: #000000b0;
        width: 35vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;

            width: 100%;

          input {
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
