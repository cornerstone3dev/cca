import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const MediaPlayer = ({ mediaList }) => {
  const [mediaType, setMediaType] = useState('video'); // Default to video
  const [selectedMedia, setSelectedMedia] = useState(mediaList[0]); // Default to the first media item

  const handleMediaTypeChange = (event) => {
    setMediaType(event.target.value);
    setSelectedMedia(mediaList.find((media) => media.type === event.target.value));
  };

  const handleMediaChange = (event) => {
    setSelectedMedia(mediaList.find((media) => media.title === event.target.value));
  };

  return (
    <Box sx={{ width: '100%', p: 2, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="media-type-label">Select Media Type</InputLabel>
        <Select
          labelId="media-type-label"
          value={mediaType}
          onChange={handleMediaTypeChange}
          label="Select Media Type"
        >
          <MenuItem value="audio">Audio</MenuItem>
          <MenuItem value="video">Video</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="media-selection-label">Select Media</InputLabel>
        <Select
          labelId="media-selection-label"
          value={selectedMedia.title}
          onChange={handleMediaChange}
          label="Select Media"
        >
          {mediaList
            .filter((media) => media.type === mediaType)
            .map((media, index) => (
              <MenuItem key={index} value={media.title}>
                {media.title}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      {mediaType === 'video' ? (
        <video controls style={{ width: '100%' }}>
          <source src={selectedMedia.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <audio controls style={{ width: '100%' }}>
          <source src={selectedMedia.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </Box>
  );
};

export default MediaPlayer;
