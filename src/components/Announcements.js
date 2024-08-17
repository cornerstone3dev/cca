import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';
import { styled } from '@mui/system';

const announcements = [
  {
    title: 'New Service Times',
    description: 'We have updated our service times. Join us for worship at 9 AM and 11 AM.',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Community Outreach',
    description: 'Our community outreach program is launching this weekend. Get involved and make a difference!',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Volunteer Opportunities',
    description: 'We have various volunteer opportunities available. Find out how you can contribute.',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '1rem',
});

const AnnouncementsSection = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Announcements
      </Typography>
      <Grid container spacing={4}>
        {announcements.map((announcement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={announcement.imageUrl}
                alt={announcement.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {announcement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {announcement.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary" href={announcement.link}>
                Learn More
              </Button>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AnnouncementsSection;
