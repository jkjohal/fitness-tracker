// import React from 'react';
// import { useQuery } from '@apollo/client';

// import { GET_USER } from '../utils/queries';

// const Profile = () => {
//   const { loading, error, data } = useQuery(GET_USER);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   const { currentUser } = data;

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Name: {currentUser.name}</p>
//       <p>Email: {currentUser.email}</p>
//       <p>Age: {currentUser.age}</p>
//       <p>Gender: {currentUser.gender}</p>
//       <p>Height: {currentUser.height}</p>
//       <p>Weight: {currentUser.weight}</p>
//       <p>Activity level: {currentUser.activityLevel}</p>
//     </div>
//   );
// };

// export default Profile;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addworkout">Add Workout</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>

      <main className="profile-main">
        <h1>Profile</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" required />

          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="weight">Weight (lbs)</label>
          <input type="number" id="weight" name="weight" required />

          <label htmlFor="weightGoal">Weight Goal (lbs)</label>
          <input type="number" id="weightGoal" name="weightGoal" required />

          <button type="submit">Update Profile</button>
        </form>
      </main>

      <footer className="footer">
        <p>© 2023 Fitness Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Profile;
