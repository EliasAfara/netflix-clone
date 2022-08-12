const movies = require('../moviesData.json');
const axios = require('axios');

// Inserting movies into the database from the JSON file

// movies.forEach((movie) => {
//   const config = {
//     method: 'post',
//     url: 'http://localhost:3001/api/movies/addMovie',
//     headers: {
//       'Content-Type': 'application/json',
//       Cookie: 'JSESSIONID=E67B7317F7D106F8B7E91E168E9EF3BF',
//     },
//     data: movie,
//   };

//   axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// reset movie ratings
axios({
  method: 'get',
  url: 'http://localhost:3001/api/movies/',
  headers: {},
})
  .then(function (response) {
    let movies = response.data.movies;
    movies.forEach((movie) => {
      console.log(movie._id);

      axios({
        method: 'put',
        url: `http://localhost:3001/api/movies/rating/updateMovieAverageRating/${movie._id}`,
        headers: {},
        data: '',
      })
        .then(function (response) {
          console.log(response.data.averageRating);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  })
  .catch(function (error) {
    console.log(error);
  });
