
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/system';

// Define the scrolling animation with a slower speed
const scrollUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

// Styled component for the announcement container
const AnnouncementContainer = styled(Box)({
  height: '100%', // Allow the container to fill available height
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  border: '1px solid #ddd',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '10px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '1.5',
  letterSpacing: '1px',
  marginBottom: '20px',
});

const AnnouncementText = styled(Box)({
  position: 'relative',
  height: 'auto', // Allow height to adjust based on content
  animation: `${scrollUp} 20s linear infinite`, // Slower scrolling speed
});

// Styled component for each announcement paper with adjusted height
const AnnouncementPaper = styled(Paper)({
  marginBottom: '10px', // Space between announcements
  padding: '15px', // Increase padding for better spacing
  backgroundColor: '#ffffff', // Background color for each announcement
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
  height: '80px', // Adjust the height of each card
  display: 'flex',
  alignItems: 'center', // Center text vertically
  justifyContent: 'center', // Center text horizontally
});

const AnnouncementWidget = ({ announcements = [] }) => {
  return (
    <AnnouncementContainer>
      <AnnouncementText>
        {announcements.map((announcement, index) => (
          <AnnouncementPaper key={index} elevation={3}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              {announcement}
            </Typography>
          </AnnouncementPaper>
        ))}
      </AnnouncementText>
    </AnnouncementContainer>
  );
};

export default AnnouncementWidget;


// import React from 'react';
// import { Box, Typography, Paper } from '@mui/material';
// import { styled, keyframes } from '@mui/system';

// // Define the scrolling animation
// const scrollUp = keyframes`
//   0% {
//     transform: translateY(100%);
//   }
//   100% {
//     transform: translateY(-100%);
//   }
// `;

// // Styled component for the announcement container
// const AnnouncementContainer = styled(Box)({
//   height: '100%', // Allow the container to fill available height
//   overflow: 'hidden',
//   position: 'relative',
//   backgroundColor: '#f0f0f0',
//   borderRadius: '4px',
//   border: '1px solid #ddd',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   padding: '10px',
//   fontFamily: 'Arial, sans-serif',
//   fontSize: '18px',
//   fontWeight: 'bold',
//   lineHeight: '1.5',
//   letterSpacing: '1px',
//   marginBottom: '20px',
// });

// const AnnouncementText = styled(Box)({
//   position: 'relative',
//   height: 'auto', // Allow height to adjust based on content
//   animation: `${scrollUp} 10s linear infinite`, // Apply the animation
// });

// // Styled component for each announcement paper
// const AnnouncementPaper = styled(Paper)({
//   marginBottom: '10px', // Space between announcements
//   padding: '10px', // Padding inside the paper
//   backgroundColor: '#ffffff', // Background color for each announcement
//   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
// });

// const AnnouncementWidget = ({ announcements = [] }) => {
//   return (
//     <AnnouncementContainer>
//       <AnnouncementText>
//         {announcements.map((announcement, index) => (
//           <AnnouncementPaper key={index} elevation={3}>
//             <Typography variant="body1" sx={{ padding: '0 10px' }}>
//               {announcement}
//             </Typography>
//           </AnnouncementPaper>
//         ))}
//       </AnnouncementText>
//     </AnnouncementContainer>
//   );
// };

// export default AnnouncementWidget;
