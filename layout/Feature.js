import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import Image from 'next/image'; // or your preferred image component

const FeatureCard = ({ title, description, icon }) => {
  // ... card content
};

const FeatureSection = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image src="/hero-image.jpg" alt="Hero Image" style={{ width: '80%', marginTop: '2rem' }} />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {/* Feature card components */}
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard title="Feature 1" description="Description 1" icon="icon1" />
          </Grid>
          {/* ... other feature cards */}
        </Grid>
      </Container>
      <Button variant="contained" color="primary" fullWidth>Call to Action</Button>
    </Box>
  );
};

export default FeatureSection;
  
  
  