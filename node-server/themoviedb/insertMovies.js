const movies = require('../moviesData.json');
const axios = require('axios');

// Inserting movies into the database from the JSON file

movies.forEach((movie) => {
  const config = {
    method: 'post',
    url: 'http://localhost:3001/api/movies/addMovie',
    headers: {
      'Content-Type': 'application/json',
      Cookie: 'JSESSIONID=E67B7317F7D106F8B7E91E168E9EF3BF',
    },
    data: movie,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});
