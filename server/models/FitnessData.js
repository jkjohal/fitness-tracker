const mongoose = require('mongoose');

const FitnessDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  }
});

const FitnessData = mongoose.model('FitnessData', FitnessDataSchema);

module.exports = FitnessData;
