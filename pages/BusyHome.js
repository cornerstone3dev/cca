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
      <LeftSidebar>
        <AnnouncementWidget announcements={announcements} />
      </LeftSidebar>

      <MainContent>
        <AnimatedNavbar />
        
        <VideoAndTeachingSection container spacing={2}>
          <Grid item xs={12} sm={8}>
            <AnimatedVideoSection />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CurrentTeaching
              title="Faith and Works: A Deep Dive"
              scripture="James 2:14-26"
            />
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

// import React from 'react';
// import { Container, Typography, AppBar, Grid } from '@mui/material';
// import { styled } from '@mui/system';
// import AnimatedVideoSection from '../components/AnimatedVideoSection';
// import ScrollingMessage from '../components/ScrollingMessage';
// import EventsCarousel from '../components/EventCarousel';
// import AnimatedNavbar from '../components/NavBar';
// import AnnouncementWidget from '../components/AnnouncementPrompt';
// import CurrentTeaching from '../components/CurrentSeries';
// import announcement_prompt_data from '../data/mock_announcement_prompt_data.json';

// const HomePageContainer = styled('div')({
//   position: 'relative',
//   width: '100%',
//   height: '100vh',
//   backgroundColor: '#f5f5f5',
//   display: 'flex',
//   flexDirection: 'row',
//   overflow: 'hidden',
// });

// const Navbar = styled(AppBar)({
//   backgroundColor: '#333',
//   padding: '0 1rem',
// });

// const LeftSidebar = styled('div')({
//   width: '250px',
//   height: '100vh',
//   overflowY: 'auto',
//   backgroundColor: '#f0f0f0',
//   borderRight: '1px solid #ddd',
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '1rem',
// });

// const MainContent = styled('div')({
//   flex: 1,
//   padding: '2rem',
//   overflowY: 'auto',
//   height: 'calc(100vh - 64px)',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1rem',
// });

// const VideoAndTeachingSection = styled(Grid)({
//   display: 'flex',
//   gap: '1rem',
// });

// const LandingPage = () => {
//   // Extract messages only once and pass them to the widget
//   const announcements = announcement_prompt_data.map((ann) => ann.message);

//   return (
//     <HomePageContainer>
//       <LeftSidebar>
//         <AnnouncementWidget announcements={announcements} />
//       </LeftSidebar>

//       <MainContent>
//         <AnimatedNavbar />
        
//         <VideoAndTeachingSection container spacing={2}>
//           <Grid item xs={12} sm={8}>
//             <AnimatedVideoSection />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <CurrentTeaching
//               title="Faith and Works: A Deep Dive"
//               scripture="James 2:14-26"
//             />
//           </Grid>
//         </VideoAndTeachingSection>
        
//         <Container id="events">
//           <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
//           <EventsCarousel />
//         </Container>

//         <ScrollingMessage />
//       </MainContent>
//     </HomePageContainer>
//   );
// };

// export default LandingPage;

// import React from 'react';
// import { Container, Typography, AppBar } from '@mui/material';
// import { styled } from '@mui/system';
// import AnimatedVideoSection from '../components/AnimatedVideoSection';
// import ScrollingMessage from '../components/ScrollingMessage';
// import EventsCarousel from '../components/EventCarousel';
// import AnimatedNavbar from '../components/NavBar';
// import announcement_prompt_data from '../data/mock_announcement_prompt_data.json';
// import AnnouncementWidget from '../components/AnnouncementPrompt';

// const HomePageContainer = styled('div')({
//   position: 'relative',
//   width: '100%',
//   height: '100vh',
//   backgroundColor: '#f5f5f5',
//   display: 'flex',
//   flexDirection: 'row',
//   overflow: 'hidden',
// });

// const Navbar = styled(AppBar)({
//   backgroundColor: '#333',
//   padding: '0 1rem',
// });

// const LeftSidebar = styled('div')({
//   width: '250px',
//   height: '100vh',
//   overflowY: 'auto',
//   backgroundColor: '#f0f0f0',
//   borderRight: '1px solid #ddd',
//   display: 'flex',
//   flexDirection: 'column',
//   padding: '1rem',
// });

// const MainContent = styled('div')({
//   flex: 1,
//   padding: '2rem',
//   overflowY: 'auto',
//   height: 'calc(100vh - 64px)',
// });

// const LandingPage = () => {
//   // Extract messages only once and pass them to the widget
//   const announcements = announcement_prompt_data.map((ann) => ann.message);

//   return (
//     <HomePageContainer>
//       <LeftSidebar>
//         <AnnouncementWidget announcements={announcements} />
//       </LeftSidebar>

//       <MainContent>
//         <AnimatedNavbar />
//         <AnimatedVideoSection />
//         <Container id="events">
//           <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
//           <EventsCarousel />
//         </Container>
//         <ScrollingMessage />
//       </MainContent>
//     </HomePageContainer>
//   );
// };

// export default LandingPage;



// import React from 'react';
// import { Container, Typography, AppBar } from '@mui/material';
// import { styled } from '@mui/system';
// import AnimatedVideoSection from '../components/AnimatedVideoSection';
// import ScrollingMessage from '../components/ScrollingMessage';
// import EventsCarousel from '../components/EventCarousel'; // Import the carousel component
// import AnimatedNavbar from '../components/NavBar';
// import announcement_prompt_data from '../data/mock_announcement_prompt_data.json';
// import AnnouncementWidget from '../components/AnnouncementPrompt';



// const HomePageContainer = styled('div')({
//   position: 'relative',
//   width: '100%',
//   height: '100vh', // Full viewport height
//   backgroundColor: '#f5f5f5', // Set your current background color or image here
//   display: 'flex',
//   flexDirection: 'row',
//   overflow: 'hidden',
// });

// const Navbar = styled(AppBar)({
//   backgroundColor: '#333',
//   padding: '0 1rem',
// });



// const LeftSidebar = styled('div')({
//   width: '250px',
//   height: '100vh', // Full viewport height
//   overflowY: 'auto',
//   backgroundColor: '#f0f0f0',
//   borderRight: '1px solid #ddd',
//   display: 'flex',
//   flexDirection: 'column', // Ensure content is laid out in a column
//   justifyContent: 'flex-start', // Align content to start at the top
//   padding: '1rem', // Optional: Add some padding for better spacing
// });

// const MainContent = styled('div')({
//   flex: 1,
//   padding: '2rem',
//   overflowY: 'auto',
//   height: 'calc(100vh - 64px)', // Ensure it matches the height of LeftSidebar minus the navbar height
// });

// const LandingPage = () => {
//   return (
//     <HomePageContainer>
//       {/* Left Sidebar with Vertical Slider */}
//       <LeftSidebar>
//       {/* <VerticalSlider cards={AnnouncementMockData} interval={1200}/> */}
//       <AnnouncementWidget announcements={announcement_prompt_data.map(ann => ann.message)} />
//       </LeftSidebar>
     

//       {/* Main Content Area */}
//       <MainContent>
//         {/* Navbar */}
//         <AnimatedNavbar />

//         {/* Animated Video Section */}
//         <AnimatedVideoSection />
     

//         {/* Events Carousel Section */}
//         <Container id="events">
//           <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
//           <EventsCarousel />
//         </Container>

    
//         {/* Scrolling Text */}
//         <ScrollingMessage />
//       </MainContent>
//     </HomePageContainer>
//   );
// };

// export default LandingPage;

