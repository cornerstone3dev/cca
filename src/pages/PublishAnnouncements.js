import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const PageContainer = styled(Container)({
  padding: '2rem',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
});

const FormContainer = styled(Paper)({
  padding: '2rem',
  marginTop: '1rem',
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
});

const SubmitButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: '#007bff',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const PublishAnnouncementPage = () => {
  const [announcement, setAnnouncement] = useState('');
  const [author, setAuthor] = useState(''); // Capture author name
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const newAnnouncement = {
      message: announcement,
      author: author, // Include author
      publishedAt: new Date().toISOString(), // Include timestamp
    };

    try {
      // Replace with your backend URL
      const response = await axios.post('http://localhost:4000/publish-announcement', newAnnouncement);

      if (response.data.success) {
        setSuccess('Announcement published successfully!');
        setAnnouncement('');
        setAuthor('');
      } else {
        setError('Failed to publish announcement.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>
        Publish Announcement
      </Typography>
      <FormContainer>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Announcement Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            required
          />
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <SubmitButton
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Publishing...' : 'Publish'}
          </SubmitButton>
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="primary">{success}</Typography>}
        </Box>
      </FormContainer>
    </PageContainer>
  );
};

export default PublishAnnouncementPage;
