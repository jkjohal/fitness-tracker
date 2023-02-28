// const { AuthenticationError } = require('apollo-server-express');
// const { User, Workout } = require('../models');
// const { signToken } = require('../utils/auth');

const User = require('../models/user');
const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

const resolvers = {
  Query: {
    async user(_, { id }) {
      const user = await User.findById(id).populate('workouts');
      return user;
    },

    async users() {
      const users = await User.find().populate('workouts');
      return users;
    },

    async workout(_, { id }) {
      const workout = await Workout.findById(id).populate('user').populate('exercises');
      return workout;
    },

    async workouts(_, { userId }) {
      const workouts = await Workout.find({ user: userId }).populate('user').populate('exercises');
      return workouts;
    },
  },

  Mutation: {
    async createUser(_, { input }) {
      const user = await User.create(input);
      return user;
    },

    async createWorkout(_, { input }) {
      const { userId, exercises, ...rest } = input;

      const workout = await Workout.create({
        user: userId,
        exercises: exercises.map(exercise => new Exercise(exercise)),
        ...rest,
      });

      await User.findByIdAndUpdate(userId, { $push: { workouts: workout._id } });

      return workout;
    },
  },

  Workout: {
    async user(workout) {
      const user = await User.findById(workout.user);
      return user;
    },

    async exercises(workout) {
      const populatedWorkout = await workout.populate('exercises').execPopulate();
      return populatedWorkout.exercises;
    },
  },
};

module.exports = resolvers;
