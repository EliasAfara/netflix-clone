const mongoose = require('mongoose');

const mongodbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log('MongoDB Connected...')
    );
  } catch (err) {
    console.error(err.message);

    // Exit process with failure
    process.exit(1);
  }
};
module.exports = mongodbConnect;
