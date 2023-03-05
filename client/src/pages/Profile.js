import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_USER } from './queries';

const Profile = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { currentUser } = data;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      <p>Age: {currentUser.age}</p>
      <p>Gender: {currentUser.gender}</p>
      <p>Height: {currentUser.height}</p>
      <p>Weight: {currentUser.weight}</p>
      <p>Activity level: {currentUser.activityLevel}</p>
    </div>
  );
};

export default Profile;
