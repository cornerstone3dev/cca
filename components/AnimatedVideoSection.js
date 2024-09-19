// src/components/AnimatedVideoSection.js

// src/components/AnimatedVideoSection.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/AnimatedVideoSection.css'; // Import the updated CSS file

const AnimatedVideoSection = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={props} className="video-container">
      <iframe
        src="https://www.youtube.com/embed/oML318lE_bQ"
        title="Video Stream"
        frameBorder="0"
        className="video-frame"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </animated.div>
  );
};

export default AnimatedVideoSection;

// import React from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import { styled } from '@mui/system';

// const VideoSection = styled('div')({
//   width: '30vw',
//   height: '30vh',
//   position: 'fixed',
//   right: '0',
//   bottom: '0',
//   backgroundColor: '#000',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: '8px',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
// });

// const VideoFrame = styled('iframe')({
//   width: '100%',
//   height: '100%',
//   borderRadius: '8px',
// });

// const AnimatedVideoSection = () => {
//   const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0, transform: 'translateY(20px)' },
//     to: { opacity: 1, transform: 'translateY(0px)' },
//     config: { tension: 120, friction: 14 },
//   });

//   return (
//     <animated.div style={props}>
//       <VideoSection>
//         <VideoFrame
//           src="https://www.youtube.com/embed/oML318lE_bQ"
//           title="Video Stream"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </VideoSection>
//     </animated.div>
//   );
// };

// export default AnimatedVideoSection;
