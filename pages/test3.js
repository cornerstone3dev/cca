import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ReactPlayer from 'react-player';
function LandingPage() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RCCG Cornerstone Church Austin TX
          </Typography>
          <Link href="#" color="inherit" underline="none">
            Home
          </Link>
          <Link href="#" color="inherit" underline="none">
            About
          </Link>
          <Link href="#" color="inherit" underline="none">
            Contact
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        {/* Hero section */}
        <Box sx={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h2" component="div" gutterBottom>
            Welcome to Our Church
          </Typography>
          <Typography variant="body1" component="div">
            Discover a place of worship, community, and growth.
          </Typography>
        </Box>

        
        {/* Video section */}
        <Box sx={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ReactPlayer url="https://www.youtube.com/watch?v=yourVideoId" width="100%" height="100%" />
        </Box>

        


        {/* Content section */}
        <Box sx={{ marginTop: '2rem' }}>
          {/* Add your content here, using components from previous responses */}
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;