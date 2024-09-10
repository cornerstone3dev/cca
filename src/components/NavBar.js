import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useSpring, animated } from '@react-spring/web';
import church_logo from '../assets/redeem_logo.png';
import TestimonyModal from './TestimonyModal'; // Import your modal component
import { publish_testimony } from '../services/testimony_service';
import './../css/NavBar.css';

// Create a styled component for the logo container
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

const Navbar = styled(AppBar)({
  background: 'linear-gradient(45deg, #ff6f00, #ff8f00)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '0 1rem',
});

const NavbarContent = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const AnimatedNavbar = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const [modalOpen, setModalOpen] = useState(false);

  // State for dropdown menus
  const [anchorElConnect, setAnchorElConnect] = useState(null);
  const [anchorElEvents, setAnchorElEvents] = useState(null);
  const openConnect = Boolean(anchorElConnect);
  const openEvents = Boolean(anchorElEvents);

  const handleConnectClick = (event) => {
    setAnchorElConnect(event.currentTarget);
  };

  const handleEventsClick = (event) => {
    setAnchorElEvents(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElConnect(null);
    setAnchorElEvents(null);
  };

  const handleTestimonySubmit = async (testimony) => {
    try {
      // Call the publish function
      const result = await publish_testimony({ content: testimony, date: new Date().toISOString() });
      console.log(result.message); // Handle success message
    } catch (error) {
      console.error('Failed to publish testimony:', error.message);
    }
  };

  return (
    // <animated.div style={props}>
    //   <Navbar position="static">
    //     <NavbarContent>
    //       <LogoContainer>
    //         <LogoImage src={church_logo} />
    //       </LogoContainer>
    //       <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: '1rem' }}>
    //         RCCG Cornerstone Church, Austin, TX
    //       </Typography>
    //       <div>
    //         <Button color="inherit" href="/messages">Messages</Button>
    //         <Button color="inherit" href="/give">Give</Button>
    //         <Button color="inherit" onClick={handleConnectClick}>Connect</Button>
    //         <Button color="inherit" onClick={handleEventsClick}>Events</Button>
    //         <Button color="inherit" onClick={() => setModalOpen(true)}>Testimonies</Button>
    //         <Button color="inherit" href="/gallery">Gallery</Button>
    //         <Button color="inherit" href="#events">Manage</Button>
    //         <IconButton edge="start" color="inherit" aria-label="menu" >
    //           <MenuIcon />
    //         </IconButton>
    //         {/* Connect Dropdown Menu */}
    //         <Menu
    //           anchorEl={anchorElConnect}
    //           open={openConnect}
    //           onClose={handleMenuClose}
    //           MenuListProps={{ 'aria-labelledby': 'connect-button' }}
    //         >
    //           <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
    //           <MenuItem onClick={handleMenuClose}>Volunteer</MenuItem>
    //         </Menu>
    //         {/* Events Dropdown Menu */}
    //         <Menu
    //           anchorEl={anchorElEvents}
    //           open={openEvents}
    //           onClose={handleMenuClose}
    //           MenuListProps={{ 'aria-labelledby': 'events-button' }}
    //         >
    //           <MenuItem onClick={handleMenuClose}>Upcoming Events</MenuItem>
    //           <MenuItem onClick={handleMenuClose}>Past Events</MenuItem>
    //         </Menu>
    //       </div>
    //     </NavbarContent>
    //   </Navbar>
    //   <TestimonyModal
    //     open={modalOpen}
    //     onClose={() => setModalOpen(false)}
    //     onSubmit={handleTestimonySubmit}
    //   />
    // </animated.div>
    <header className='header'>
      <div className='rccg-logo-container'>
        <img className="rccg-logo" src={church_logo}/>
      </div>

      <nav className='nav-bar'>
        <a href='/'>Home</a>
        <a href='/messages'>Messages</a>
        <a href='/give'>Give</a>
        <a href='/'>Connect</a>
        <a href='/'>Events</a>
        <a href='/'>Testimonies</a>
        <a href='/gallery'>Gallery</a>
        <a href='#events'>Manage</a>
      </nav>
    </header>
  );
};

export default AnimatedNavbar;


// import React, { useState,useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton,MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// import { styled } from '@mui/system';
// import { useSpring, animated } from '@react-spring/web';
// import church_logo from '../assets/redeem_logo.png'
// import TestimonyModal from './TestimonyModal'; // Import your modal component
// import { publish_testimony } from '../services/testimony_service'; 
// // Create a styled component for the logo container
// const LogoContainer = styled('div')({
//   width: '50px',  // Width of the circle
//   height: '50px', // Height of the circle
//   borderRadius: '50%',
//   overflow: 'hidden',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

// const LogoImage = styled('img')({
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover', // Ensures the image covers the circle
//   });

// const Navbar = styled(AppBar)({
//   background: 'linear-gradient(45deg, #ff6f00, #ff8f00)',
//   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//   padding: '0 1rem',
// });

// const NavbarContent = styled(Toolbar)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// });

// const AnimatedNavbar = () => {
//   const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 500 },
//   });

//   const [modalOpen, setModalOpen] = useState(false);

  

//   // const handleOpenModal = () => setModalOpen(true);
//   // const handleCloseModal = () => setModalOpen(false);

//   const handleTestimonySubmit = async (testimony) => {
//     try {
//       // Call the publish function
//       const result = await publish_testimony({ content: testimony, date: new Date().toISOString() });
//       console.log(result.message); // Handle success message
//     } catch (error) {
//       console.error('Failed to publish testimony:', error.message);
//     }
//   };

//   return (
//     <animated.div style={props}>
//       <Navbar position="static">
//         <NavbarContent>
//           {/* <img src="/assets/redeem_logo.png" alt="Logo" style={{ height: '40px' }} /> */}
//           <LogoContainer>
//           <LogoImage src={church_logo} />
//          </LogoContainer>
//           <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: '1rem' }}>
//             RCCG Cornerstone Church, Austin,TX
//           </Typography>
//           <div>
//             <Button color="inherit" href="/messages" >Messages</Button>
//             <Button color="inherit" href="/give" >Give</Button>
//             <Button color="inherit" href="#contact">Connect</Button>
//             <Button color="inherit" onClick={() => setModalOpen(true)}>Testimonies</Button>
//             <Button color="inherit" href="/gallery" >Gallery</Button>
//             <Button color="inherit" href="#events">Manage</Button>
            
            
//           </div>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//         </NavbarContent>
//       </Navbar>
//       <TestimonyModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onSubmit={handleTestimonySubmit}
//       />
//     </animated.div>
//   );
// };

// export default AnimatedNavbar;


