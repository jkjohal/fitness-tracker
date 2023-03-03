const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    user(id: ID!): User
    users: [User!]!
    workout(id: ID!): Workout
    workouts(userId: ID!): [Workout!]!
  }  
  type User {
        id: ID!
        name: String!
        email: String!
        workouts: [Workout!]!
      }
    
      type Workout {
        id: ID!
        name: String!
        description: String
        exercises: [Exercise!]!
        user: User!
        date: String!
      }
      
      type Exercise {
            id: ID!
            description: String!
            duration: Int!
            date: String!
          }
          
          type Mutation {
            createUser(input: CreateUserInput!): User
            createWorkout(input: CreateWorkoutInput!): Workout
          }  
          
          input CreateUserInput {
                name: String!
                email: String!
                password: String!
              }
              
          input CreateWorkoutInput {
                    name: String!
                    description: String!
                    exercises: [CreateExerciseInput!]!
                  }
                  
                  input CreateExerciseInput {
                        description: String!
                        duration: Int!
                      }`


// type Mutation {
//   createUser(input: CreateUserInput!): User
//   createWorkout(input: CreateWorkoutInput!): Workout
// }

//   type User {
//     id: ID!
//     name: String!
//     email: String!
//     workouts: [Workout!]!
//   }

//   type Workout {
//     id: ID!
//     name: String!
//     description: String
//     exercises: [Exercise!]!
//     user: User!
//     date: String!
//   }

//   type Exercise {
//     id: ID!
//     description: String!
//     duration: Int!
//     date: String!
//   }

//   input CreateUserInput {
//     name: String!
//     email: String!
//     password: String!
//   }

//   input CreateWorkoutInput {
//     name: String!
//     description: String
//     exercises: [CreateExerciseInput!]!
//   }

//   input CreateExerciseInput {
//     description: String!
//     duration: Int!
//   }


module.exports = typeDefs;