const mongoose = require('mongoose');

mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/FitnessTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
