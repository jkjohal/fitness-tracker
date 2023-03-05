const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]
  }

  type Workout {
    _id: ID
    workoutName: String
    createdAt: String
  }

  input WorkoutInput {
    workoutName: String!
    createdAt: String!
  }

  type Query {
    me: User
    workouts(username: String): [Workout]
    workout(_id: ID!): Workout
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveWorkout(input: WorkoutInput!): User
    removeWorkout(workoutId: ID!): User
  }
`;

module.exports = typeDefs;
