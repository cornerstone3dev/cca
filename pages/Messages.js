// PayingMessagesPage.jsx
import React, { useState } from 'react';
import { Grid, Typography, Paper, Container } from '@mui/material';
import MessagesTable from '../components/MessagesTable';
import mockData from '../data/mock_messages.json';

import NavBar from '../components/MessageNavBar';

const PayingMessagesPage = () => {
 
  const [selectedLink, setSelectedLink] = useState(null);

  const filteredData = mockData.filter((item) => {
    // Implement filtering logic based on filters state
    return true; // Placeholder, implement your filtering logic
  });



  const handlePlayMedia = (link) => {
    setSelectedLink(link);
  };

  return (
    <div>
        <NavBar/>
        <Container maxWidth="xl" style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: 0 }}>
         
    <Paper elevation={3} style={{ flex: 1, padding: '1.5rem', marginBottom: '2rem' }}>
      <MessagesTable data={filteredData} onPlay={handlePlayMedia} />
    </Paper>
  </Container>
    </div>
    
  );
};

export default PayingMessagesPage;



// import React, { useState } from 'react';
// import { Grid, Typography, Paper, Container } from '@mui/material';
// import Filters from '../components/Filters';
// import MessagesTable from '../components/MessagesTable';
// import MediaPlayer from '../components/MediaPlayer';
// import mockData from '../data/mock_messages.json';

// const PayingMessagesPage = () => {
//   const [filters, setFilters] = useState({ speaker: '', title: '', date: '', length: '' });
//   const [selectedLink, setSelectedLink] = useState(null);

//   const filteredData = mockData.filter((item) => {
//     // Implement filtering logic based on filters state
//     return true; // Placeholder, implement your filtering logic
//   });

//   const handleFilterChange = (filterName, value) => {
//     setFilters({ ...filters, [filterName]: value });
//   };

//   const handlePlayMedia = (link) => {
//     setSelectedLink(link);
//   };

//   return (
//     <Container maxWidth="lg" style={{ paddingTop: '2rem' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Messages
//       </Typography>
//       <Paper elevation={3} style={{ padding: '1.5rem', marginBottom: '2rem' }}>
//         <Filters filters={filters} onChange={handleFilterChange} />
//       </Paper>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={8}>
//           <Paper elevation={3} style={{ padding: '1.5rem', marginBottom: '2rem' }}>
//             <MessagesTable data={filteredData} onPlay={handlePlayMedia} />
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} style={{ padding: '1.5rem', marginBottom: '2rem' }}>
//             {selectedLink ? (
//               <MediaPlayer link={selectedLink} />
//             ) : (
//               <Typography variant="body1">Select a message to play</Typography>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default PayingMessagesPage;
