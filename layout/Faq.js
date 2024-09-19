import React from 'react';
import { Box, Typography, Button, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Image from 'next/image'; // or your preferred image component

const FAQSection = () => {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image src="/hero-image.jpg" alt="Hero Image" style={{ width: '80%', marginTop: '2rem' }} />
        <Container maxWidth="md">
          <Accordion>
            <AccordionSummary>
              <Typography>Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Answer 1</Typography>
            </AccordionDetails>
          </Accordion>
          {/* ... other FAQs */}
        </Container>
        <Button variant="contained" color="primary">Contact Us</Button>
      </Box>
    );
  };
  
  export default FAQSection;