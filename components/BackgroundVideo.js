import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mui/material';

function BackgroundVideo({ url, children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Full viewport height
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
      }}
    >
      {/* Video Background */}
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover', // Ensures the video covers the entire container
          opacity: 0.8, // Adjust transparency for better visibility of content
        }}
        config={{
          youtube: {
            playerVars: { controls: 0, showinfo: 0, modestbranding: 1 },
          },
        }}
      />

      {/* Content Layer */}
      <Box
        sx={{
          position: 'relative', // Ensures content is positioned above the video
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: { xs: '1rem', sm: '2rem' }, // Responsive padding
          zIndex: 1, // Ensure content is above the video
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundVideo;


// import React from 'react';
// import ReactPlayer from 'react-player';
// import { Box } from '@mui/material';

// function BackgroundVideo({ url, children }) {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: { xs: '50vh', sm: '60vh', md: '70vh' }, // Responsive height
//         overflow: 'hidden',
//       }}
//     >
//       {/* Video Background */}
//       <ReactPlayer
//         url={url}
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           objectFit: 'cover',
//           opacity: 0.2, // Adjust transparency for better visibility of content
//         }}
//         config={{
//           youtube: {
//             playerVars: { controls: 0, showinfo: 0, modestbranding: 1 },
//           },
//         }}
//       />

//       {/* Content Layer */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           color: 'white',
//           textAlign: 'center',
//           padding: { xs: '1rem', sm: '2rem' }, // Responsive padding
//           zIndex: 1, // Ensure content is above the video
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// }

// export default BackgroundVideo;


// import React from 'react';
// import ReactPlayer from 'react-player';
// import { Box } from '@mui/material';

// function BackgroundVideo({url}) {
 
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: { xs: '50vh', sm: '60vh', md: '90vh' }, // Responsive height
//         overflow: 'hidden',
//       }}
//     >
//       <ReactPlayer
//         url={url} 
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//         style={{ position: 'absolute', top: 0, left: 0 }}
//         config={{
//           youtube: {
//             playerVars: { controls: 0, showinfo: 0, modestbranding: 1 },
//           },
//         }}
//       />
//     </Box>
//   );
// }

// export default BackgroundVideo;



