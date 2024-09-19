// src/components/ScrollingMessage.js
import React from 'react';
import { styled, keyframes } from '@mui/system';

// Define the scrolling animation
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for scrolling text
const ScrollingText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
  animation: `${scroll} 15s linear infinite`,
  padding: '1rem',
  boxSizing: 'border-box',
});

const ScrollingMessage = () => {
  return (
    <ScrollingText>
      Psalms 84:5 : They go from strength to strength, each one as they appear before you O God in Zion
    </ScrollingText>
  );
};

export default ScrollingMessage;
