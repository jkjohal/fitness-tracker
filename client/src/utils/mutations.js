import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      user {
        _id
        name
        email
        age
        gender
        height
        weight
        activityLevel
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      _id
      name
      email
      age
      gender
      height
      weight
      activityLevel
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $input: UserInput!) {
    updateUser(_id: $_id, input: $input) {
      _id
      name
      email
      age
      gender
      height
      weight
      activityLevel
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      _id
      name
      email
      age
      gender
      height
      weight
      activityLevel
    }
  }
`;