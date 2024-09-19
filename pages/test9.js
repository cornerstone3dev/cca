import React from 'react';
import { Box, Button } from '@mui/material';
import AnimatedNavbar from '../components/NavBar';
import BackgroundVideo from '../components/BackgroundVideo';

const LandingPage = () => {
  return (
    <Box sx={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <AnimatedNavbar />
      <BackgroundVideo url="/background_video.mp4">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Cornerstone Church </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '2rem' }}>
          We are a community of believers dedicated to modeling the love of Jesus Christ and establishing God's kingdom in our sphere of Influence
        </p>
        <Button variant="contained" color="primary" size="large">
          About US
        </Button>
      </BackgroundVideo>
    </Box>
  );
};

export default LandingPage;
