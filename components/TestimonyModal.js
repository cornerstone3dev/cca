import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';

// Add styles for the scrolling text
const scrollingTextStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  boxSizing: 'border-box',
  animation: 'scrolling 10s linear infinite',
  position: 'absolute',
  bottom: 0,
  width: '100%',
};

const scrollingTextKeyframes = `
@keyframes scrolling {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}`;

const TestimonyModal = ({ open, onClose, onSubmit }) => {
  const [testimony, setTestimony] = useState('');

  const handleSubmit = () => {
    onSubmit(testimony);
    setTestimony('');
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
          mx: 'auto',
          mt: '15%',
          borderRadius: 2,
          boxShadow: 24,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <style>{scrollingTextKeyframes}</style>
        <Typography variant="h6" gutterBottom>
          Share Your Testimony
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={testimony}
          onChange={(e) => setTestimony(e.target.value)}
          variant="outlined"
          label="Your Testimony"
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose} sx={{ ml: 2 }}>
            Cancel
          </Button>
        </Box>
        <Box sx={{ ...scrollingTextStyle, bottom: 0, position: 'absolute' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Revelation 19:10 : The testimony of Jesus is the spirit of prophecy
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

TestimonyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TestimonyModal;
