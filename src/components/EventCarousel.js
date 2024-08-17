// src/components/EventsCarousel.js
import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for card
const CardStyled = styled(Card)({
  margin: '1rem',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const EventsCarousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <CardStyled>
          <CardContent>
            <Typography variant="h5">Celebration Service</Typography>
            <Typography>Date: August 20, 2024</Typography>
            <Typography>Time: 10:00 AM</Typography>
            <Button variant="contained" color="secondary">Learn More</Button>
          </CardContent>
        </CardStyled>
      </div>
      <div>
        <CardStyled>
          <CardContent>
            <Typography variant="h5">Sunday School</Typography>
            <Typography>Date: September 5, 2024</Typography>
            <Typography>Time: 11:00 AM</Typography>
            <Button variant="contained" color="secondary">Learn More</Button>
          </CardContent>
        </CardStyled>
      </div>
      <div>
        <CardStyled>
          <CardContent>
            <Typography variant="h5">Command Your Day</Typography>
            <Typography>Date: September 5, 2024</Typography>
            <Typography>Time: 11:00 AM</Typography>
            <Button variant="contained" color="secondary">Learn More</Button>
          </CardContent>
        </CardStyled>
      </div>
      <div>
        <CardStyled>
          <CardContent>
            <Typography variant="h5">Prayer Meeting</Typography>
            <Typography>Date: September 5, 2024</Typography>
            <Typography>Time: 11:00 AM</Typography>
            <Button variant="contained" color="secondary">Learn More</Button>
          </CardContent>
        </CardStyled>
      </div>
      {/* Add more event cards here */}
    </Slider>
  );
};

export default EventsCarousel;
