

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image'; // or your preferred image componen


const CountdownTimer = ({ targetDate }) => {
    // ... countdown timer logic
  };
  
  const CountdownSection = () => {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image src="/hero-image.jpg" alt="Hero Image" style={{ width: '80%', marginTop: '2rem' }} />
        <Container maxWidth="md">
          <CountdownTimer targetDate="2024-12-25T23:59:59" />
          <Button variant="contained" color="primary">Register Now</Button>
        </Container>
      </Box>
    );
  };
  
  export default CountdownSection;