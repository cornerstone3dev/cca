// src/components/AnimatedHero.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Container, Typography, Button } from '@mui/material';
import '../styles/AnimatedHero.css'; // Ensure you have this CSS file

const AnimatedHero = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={props} className="hero-section">
      <Container>
        <Typography variant="h2">Welcome to Our Church</Typography>
        {/* <Typography variant="h5">Join us for worship and community</Typography>
        <Button variant="contained" color="primary" href="#events">Upcoming Events</Button> */}
      </Container>
    </animated.div>
  );
};

export default AnimatedHero;
