import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      workouts {
        id
        name
        exercises {
          id
          name
          sets
          reps
          weight
        }
      }
    }
  }
`;

export const GET_WORKOUT = gql`
  query GetWorkout($workoutId: ID!) {
    workout(id: $workoutId) {
      id
      name
      exercises {
        id
        name
        sets
        reps
        weight
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout($name: String!, $userId: ID!) {
    addWorkout(name: $name, userId: $userId) {
      id
      name
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation AddExercise($name: String!, $workoutId: ID!, $sets: Int!, $reps: Int!, $weight: Float!) {
    addExercise(name: $name, workoutId: $workoutId, sets: $sets, reps: $reps, weight: $weight) {
      id
      name
      sets
      reps
      weight
    }
  }
`;
