import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ReactPlayer from 'react-player';

function LandingPage() {
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElMinistries, setAnchorElMinistries] = useState(null);

  const handleOpenAbout = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseAbout = () => {
    setAnchorElAbout(null);
  };

  const handleOpenMinistries = (event) => {
    setAnchorElMinistries(event.currentTarget);
  };

  const handleCloseMinistries = () => {
    setAnchorElMinistries(null);
  };

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
          <Link href="#" color="inherit" underline="none" aria-controls="about-menu" aria-haspopup="true" onClick={handleOpenAbout}>
            About Us
          </Link>
          <Menu
            id="about-menu"
            anchorEl={anchorElAbout}
            open={Boolean(anchorElAbout)}
            onClose={handleCloseAbout}
            MenuListProps={{ 'aria-labelledby': 'about-us' }}
          >
            <MenuItem onClick={handleCloseAbout}>Our Mission</MenuItem>
            <MenuItem onClick={handleCloseAbout}>Our History</MenuItem>
            <MenuItem onClick={handleCloseAbout}>Our Team</MenuItem>
          </Menu>
          <Link href="#" color="inherit" underline="none" aria-controls="ministries-menu" aria-haspopup="true" onClick={handleOpenMinistries}>
            Ministries
          </Link>
          <Menu
            id="ministries-menu"
            anchorEl={anchorElMinistries}
            open={Boolean(anchorElMinistries)}
            onClose={handleCloseMinistries}
            MenuListProps={{ 'aria-labelledby': 'ministries' }}
          >
            <MenuItem onClick={handleCloseMinistries}>Children's Ministry</MenuItem>
            <MenuItem onClick={handleCloseMinistries}>Youth Ministry</MenuItem>
            <MenuItem onClick={handleCloseAbout}>Music Ministry</MenuItem>
          </Menu>
          <Link href="#" color="inherit" underline="none">
            Contact
          </Link>
        </Toolbar>
      </AppBar>

      {/* Rest of the page content */}
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
          {/* Add your content here */}
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;