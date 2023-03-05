import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';


const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
  });

  const [signupUser, { error }] = useMutation(SIGNUP_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signupUser({
        variables: { input: formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formState.email}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formState.password}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={formState.age}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          onChange={handleChange}
          value={formState.gender}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="height">Height (in cm):</label>
        <input
          type="number"
          name="height"
          id="height"
          onChange={handleChange}
          value={formState.height}
        />

        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          name="weight"
          id="weight"
          onChange={handleChange}
          value={formState.weight}
        />

        <label htmlFor="activityLevel">Activity Level:</label>
        <select
          name="activityLevel"
          id="activityLevel"
          onChange={handleChange}
          value={formState.activityLevel}
        >
          <option value="">Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="moderately active">Moderately active</option>
          <option value="active">Active</option>
          <option value="very active">Very active</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>
      {error && <div>Sign up failed</div>}
    </div>
  );
};

export default Signup;
