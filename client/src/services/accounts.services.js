import axios from 'axios';

export const login = async (formValues, dispatch, navigate) => {
  await axios
    .post('http://localhost:8080/api/users/login', formValues)
    .then((response) => {
      console.log(response);
      dispatch({
        type: 'Login',
        payload: response.data,
      });

      navigate('/');
    })
    .catch((error) => {
      console.error('Login form: There was an error!', error);
    });
};

export const register = async (formValues, dispatch, navigate) => {
  await axios
    .post('http://localhost:8080/api/users/register', formValues)
    .then((response) => {
      console.log(formValues);
      console.log(response);

      dispatch({
        type: 'Register',
        payload: response.data,
      });

      navigate('/');
    })
    .catch((error) => {
      console.error('Sign up form: There was an error!', error);
    });
};
