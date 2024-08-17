// src/pages/AdminLandingPage.js
import React from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Dashboard', link: '/admin/dashboard' },
  { title: 'House Fellowship', link: '/admin/house-fellowship' },
  { title: 'Sunday School', link: '/admin/sunday-school' },
  { title: 'Calendar', link: '/admin/calendar' }
];

const AdminLandingPage = () => (
  <Box sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={3}>
      {sections.map((section) => (
        <Grid item xs={12} sm={6} md={3} key={section.title}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                <Link to={section.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {section.title}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default AdminLandingPage;
