
// src/components/LandingPage.js
import React from 'react';
import { Container, Typography, Button, Grid, AppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import AnimatedHero from '../components/AnimatedHero';
import AnimatedVideoSection from '../components/AnimatedVideoSection';
import ScrollingMessage from '../components/ScrollingMessage';
import EventsCarousel from '../components/EventCarousel'; // Import the carousel component
import AnimatedNavbar from '../components/NavBar';
import Announcement from '../components/Announcements';



const HomePageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100vh', // Full viewport height
  backgroundColor: '#f5f5f5', // Set your current background color or image here
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  overflow: 'hidden',

  // Logo as background
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("../assets/redeem_logo.png")', // Replace with your logo URL
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    opacity: 0.2, // Adjust for transparency (0 is fully transparent, 1 is fully opaque)
    backgroundBlendMode: 'overlay', // Blends the logo with the background
    zIndex: 1,
  },
});

const Content = styled('div')({
  position: 'relative',
  zIndex: 2, // Ensures content is above the background image
  color: '#333',
});


const Navbar = styled(AppBar)({
  backgroundColor: '#333',
  padding: '0 1rem',
});

const Section = styled(Container)({
  padding: '2rem',
});

const LandingPage = () => {
  return (
    <div>
 
      {/* Navbar */}
        <AnimatedNavbar />

      {/* Animated Hero Section */}
      {/* <AnimatedHero /> */}

      {/* Animated Video Section */}
 
      <AnimatedVideoSection />
      <Announcement />
      {/* Events Carousel Section */}
      <Section id="events">
        <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
        <EventsCarousel />
      </Section>

      {/* About Us Section */}
      <Section>
        <Typography variant="h3" gutterBottom>About Us</Typography>
        <Typography paragraph>
          We are a community dedicated to spreading love and faith. Our mission is to...
        </Typography>
        <Button variant="outlined" color="primary" href="#contact">Contact Us</Button>
      </Section>

      {/* Community Highlights Section */}
      <Section>
        <Typography variant="h3" gutterBottom>Community Highlights</Typography>
        <Typography paragraph>
          Hear from our members and see what makes our community special...
        </Typography>
        {/* Add testimonials or photo gallery here */}
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Typography variant="h3" gutterBottom>Contact Us</Typography>
        <Typography paragraph>
          If you have any questions or need assistance, please reach out to us...
        </Typography>
        {/* Add contact form here */}
      </Section>

      {/* Scrolling Text */}
      <ScrollingMessage />
     
      </div>
      
  );
};

export default LandingPage;


// // src/components/LandingPage.js
// import React from 'react';
// import { Container, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar, IconButton } from '@mui/material';
// import { styled } from '@mui/system';
// import MenuIcon from '@mui/icons-material/Menu';
// import AnimatedHero from '../components/AnimatedHero';
// import AnimatedVideoSection from '../components/AnimatedVideoSection';
// import ScrollingMessage from '../components/ScrollingMessage';

// const Navbar = styled(AppBar)({
//   backgroundColor: '#333',
//   padding: '0 1rem',
// });

// const Section = styled(Container)({
//   padding: '2rem',
// });

// const CardStyled = styled(Card)({
//   margin: '1rem',
//   transition: 'transform 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// });

// const LandingPage = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             RCCG Cornerstone Church 
//           </Typography>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit" href="#events">Events</Button>
//           <Button color="inherit" href="#contact">Contact</Button>
//         </Toolbar>
//       </Navbar>

//       {/* Animated Hero Section */}
//       <AnimatedHero />

//       {/* Animated Video Section */}
//       <AnimatedVideoSection />

//       {/* About Us Section */}
//       <Section>
//         <Typography variant="h3" gutterBottom>About Us</Typography>
//         <Typography paragraph>
//           We are a community dedicated to spreading love and faith. Our mission is to...
//         </Typography>
//         <Button variant="outlined" color="primary" href="#contact">Contact Us</Button>
//       </Section>

//       {/* Upcoming Events Section */}
//       <Section id="events">
//         <Typography variant="h3" gutterBottom>Upcoming Events</Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6} md={4}>
//             <CardStyled>
//               <CardContent>
//                 <Typography variant="h5">Celebration Service</Typography>
//                 <Typography>Date: August 20, 2024</Typography>
//                 <Typography>Time: 10:00 AM</Typography>
//                 <Button variant="contained" color="secondary">Learn More</Button>
//               </CardContent>
//               <CardContent>
//                 <Typography variant="h5">Sunday School</Typography>
//                 <Typography>Date: August 21, 2024</Typography>
//                 <Typography>Time: 10:00 AM</Typography>
//                 <Button variant="contained" color="secondary">Learn More</Button>
//               </CardContent>
//               <CardContent>
//                 <Typography variant="h5">Bible Study</Typography>
//                 <Typography>Date: August 21, 2024</Typography>
//                 <Typography>Time: 10:00 AM</Typography>
//                 <Button variant="contained" color="secondary">Learn More</Button>
//               </CardContent>
//               <CardContent>
//                 <Typography variant="h5">Prayer Meeting </Typography>
//                 <Typography>Date: August 21, 2024</Typography>
//                 <Typography>Time: 10:00 AM</Typography>
//                 <Button variant="contained" color="secondary">Learn More</Button>
//               </CardContent>
//               <CardContent>
//                 <Typography variant="h5">Commanding The Day</Typography>
//                 <Typography>Date: August 21, 2024</Typography>
//                 <Typography>Time: 10:00 AM</Typography>
//                 <Button variant="contained" color="secondary">Learn More</Button>
//               </CardContent>
//             </CardStyled>
//           </Grid>
//           {/* Add more event cards as needed */}
//         </Grid>
//       </Section>

//       {/* Community Highlights Section */}
//       <Section>
//         <Typography variant="h3" gutterBottom>Community Highlights</Typography>
//         <Typography paragraph>
//           Hear from our members and see what makes our community special...
//         </Typography>
//         {/* Add testimonials or photo gallery here */}
//       </Section>

//       {/* Contact Section */}
//       <Section id="contact">
//         <Typography variant="h3" gutterBottom>Contact Us</Typography>
//         <Typography paragraph>
//           If you have any questions or need assistance, please reach out to us...
//         </Typography>
//         {/* Add contact form here */}
//       </Section>

//       {/* Scrolling Text */}
//       <ScrollingMessage />
//     </div>
//   );
// };

// export default LandingPage;
