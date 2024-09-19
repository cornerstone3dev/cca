import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Image from 'next/image'; // or your preferred image component

const HeroSection = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Image src="/hero-image.jpg" alt="Hero Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
        <Typography variant="h2" color="white" fontWeight="bold">Headline</Typography>
        <Typography variant="body1" color="white">Subheadline</Typography>
        <Button variant="contained" color="primary">Call to Action</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;