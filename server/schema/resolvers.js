const { User, Workout } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        try {
          const user = await User.findById(context.user._id).populate('workouts');
          return user;
        } catch (err) {
          console.log(err);
          throw new Error('Unable to get user');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    workouts: async (parent, { username }) => {
      try {
        const params = username ? { username } : {};
        return await Workout.find(params).sort({ createdAt: -1 });
      } catch (err) {
        console.log(err);
        throw new Error('Unable to get workouts');
      }
    },
    workout: async (parent, { _id }) => {
      try {
        return await Workout.findById(_id);
      } catch (err) {
        console.log(err);
        throw new Error('Unable to get workout');
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
        throw new Error('Unable to add user');
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('Incorrect email or password');
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError('Incorrect email or password');
        }
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
        throw new Error('Unable to log in');
      }
    },
    saveWorkout: async (parent, { input }, context) => {
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { workouts: input } },
            { new: true }
          );
          return updatedUser;
        } catch (err) {
          console.log(err);
          throw new Error('Unable to save workout');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeWorkout: async (parent, { workoutId }, context) => {
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { workouts: { _id: workoutId } } },
            { new: true }
          );
          return updatedUser;
        } catch (err) {
          console.log(err);
          throw new Error('Unable to remove workout');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
