import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import church_logo from '../assets/redeem_logo.png';
const LogoContainer = styled('div')({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LogoImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
     
        <LogoContainer>
            <LogoImage src={church_logo} />
          </LogoContainer>
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: '1rem' }}>
            Cornerstone Church Messages
          </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
    
        {/* Add more navigation items here */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;