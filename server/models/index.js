const mongoose = require('mongoose');

const User = require('./user');
const Workout = require('./workout');
const Exercise = require('./exercise');

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Workout, Exercise };

module.exports = { connectDb, models };
