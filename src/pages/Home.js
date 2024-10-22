import React from 'react';
import { Container, Typography, AppBar, Grid } from '@mui/material';
import { styled } from '@mui/system';
import AnimatedVideoSection from '../components/AnimatedVideoSection';
import ScrollingMessage from '../components/ScrollingMessage';
import EventsCarousel from '../components/EventCarousel';
import AnimatedNavbar from '../components/NavBar';
import AnnouncementWidget from '../components/AnnouncementPrompt';
import CurrentTeaching from '../components/CurrentSeries';
import announcement_prompt_data from '../data/mock_announcement_prompt_data.json';

const HomePageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
});

const Navbar = styled(AppBar)({
  backgroundColor: '#333',
  padding: '0 1rem',
});

const LeftSidebar = styled('div')({
  width: '250px',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: '#f0f0f0',
  borderRight: '1px solid #ddd',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
});

const MainContent = styled('div')({
  flex: 1,
  padding: '2rem',
  overflowY: 'auto',
  height: 'calc(100vh - 64px)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const VideoAndTeachingSection = styled(Grid)({
  display: 'flex',
  gap: '1rem',
});

const LandingPage = () => {
  // Extract messages only once and pass them to the widget
  const announcements = announcement_prompt_data.map((ann) => ann.message);

  return (
    <HomePageContainer>
      <MainContent>
        <AnimatedNavbar />
        
        <VideoAndTeachingSection container spacing={2}>
          <Grid item xs={12} sm={8}>
            <AnimatedVideoSection />
          </Grid>
         
        </VideoAndTeachingSection>
        
        <Container id="events">
          <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
          <EventsCarousel />
        </Container>

        <ScrollingMessage />
      </MainContent>
    </HomePageContainer>
  );
};

export default LandingPage;
