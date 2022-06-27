const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongodbConnect = require('./config/mongoConnect');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Set security header
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan('dev'));

// body parser middleware
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

// Testing
// app.get('/', (req, res) => {
//   res.send('Hello Elias');
// });

const PORT = process.env.PORT || 3001;

mongodbConnect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
