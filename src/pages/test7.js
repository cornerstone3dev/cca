import React from 'react';

import { styled } from '@mui/system';
import { Container, Typography,Box } from '@mui/material';
import ScrollingMessage from '../components/ScrollingMessage';
import EventsCarousel from '../components/EventCarousel';
import AnimatedNavbar from '../components/NavBar';
import BackgroundVideo from '../components/BackgroundVideo';


const HomePageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const MainContent = styled('div')({
  flex: 1,
  padding: '2rem',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const LandingPage = () => {

  const video_file = '/background_video.mp4' 
  
  return (
    <HomePageContainer>
    
        <AnimatedNavbar />
        <BackgroundVideo url={video_file} />

         {/* Additional content here */}
         <Container id="events">
          <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
          <EventsCarousel />
        </Container>

   

       
      
    </HomePageContainer>
  );
};

export default LandingPage;
