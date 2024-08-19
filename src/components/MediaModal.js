import React from 'react';
import ReactPlayer from 'react-player';
import { Dialog, IconButton, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MediaPopup = ({ open, onClose, url }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Media Player
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <ReactPlayer url={url} controls={true} width="100%" height="auto" />
      </DialogContent>
    </Dialog>
  );
};

export default MediaPopup;
