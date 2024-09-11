
import React from 'react';
import { Button } from '@mui/material';
import AnimatedNavbar from '../components/NavBar';
import './../css/Home.css';
import BackGroundVideo from './../media/videos/building_theme.mp4'
const LandingPage = () => {
  
  return (
    <div className="landingpage">
        <video src={BackGroundVideo} autoPlay muted loop className="video-bg" />
        <div className="bg-overlay"></div>

        <div>
          <AnimatedNavbar/>
        </div>

        <div className="home-text">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Cornerstone Church </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '2rem' }}>
          We are a community of believers dedicated to modeling the love of Jesus Christ and establishing God's kingdom in our sphere of Influence
        </p>
        <Button variant="contained" color="primary" size="large">
          About US
        </Button>
        </div>

        {/* <div className="home-btn">Explore</div> */}

    </div>
  )
};

export default LandingPage;
