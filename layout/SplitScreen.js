import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image'; // or your preferred image component

const SplitScreenSection = () => {
  return (
    <Box display="flex" flexDirection="row">
      <Box flex={1}>
        <Image src="/image1.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h3">Headline</Typography>
        <Typography variant="body1">Subheadline</Typography>
        <Button variant="contained" color="primary">Call to Action</Button>
      </Box>
    </Box>
  );
};

export default SplitScreenSection;