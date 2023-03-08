// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import { SIGNUP_USER } from '../utils/mutations';
// // import Auth from '../utils/auth';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     age: '',
//     gender: '',
//     height: '',
//     weight: '',
//     activityLevel: '',
//   });

//   const [signupUser, { loading, error }] = useMutation(SIGNUP_USER);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     signupUser({ variables: { input: formData } });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <label htmlFor="age">Age:</label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />

//         <label htmlFor="gender">Gender:</label>
//         <select
//           id="gender"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//         >
//           <option value="">Select gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>

//         <label htmlFor="height">Height (in cm):</label>
//         <input
//           type="number"
//           id="height"
//           name="height"
//           value={formData.height}
//           onChange={handleChange}
//         />

//         <label htmlFor="weight">Weight (in kg):</label>
//         <input
//           type="number"
//           id="weight"
//           name="weight"
//           value={formData.weight}
//           onChange={handleChange}
//         />

//         <label htmlFor="activityLevel">Activity Level:</label>
//         <select
//           id="activityLevel"
//           name="activityLevel"
//           value={formData.activityLevel}
//           onChange={handleChange}
//         >
//           <option value="">Select activity level</option>
//           <option value="sedentary">Sedentary</option>
//           <option value="moderately active">Moderately active</option>
//           <option value="active">Active</option>
//           <option value="very active">Very active</option>
//         </select>

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    weight: '',
    weightGoal: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      navigate('/profile');
    } catch (error) {
      console.error(error);
      // Here you could show an error message to the user
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign up for Fitness Tracker</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="weight">Weight (lbs)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        <label htmlFor="weightGoal">Weight Goal (lbs)</label>
        <input
          type="number"
          id="weightGoal"
          name="weightGoal"
          value={formData.weightGoal}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign up</button>
      </form>
      <div className="signup-login-link">
        Already have an account? <a href="/login">Log in</a>
      </div>
    </div>
  );
}

export default Signup;


