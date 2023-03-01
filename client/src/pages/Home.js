import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Box bgcolor='gray.100' py={8}>
      <Typography variant='h1' align='center' fontWeight='bold' gutterBottom>
        Welcome to Fitness Tracker App!
      </Typography>
    </Box>
  );
};

export default Home;
