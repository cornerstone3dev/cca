
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, IconButton, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MediaPopup from './MediaModal';
import Filters from './Filters'; // Ensure you have the Filters component imported
// import './MessageTable.css'; // Import your CSS file

const MessageTable = ({ data }) => {
  const [filters, setFilters] = useState({
    speaker: '',
    title: '',
    date: '',
    length: '',
  });
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [popupOpen, setPopupOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const handlePlayClick = (link) => {
    setCurrentUrl(link);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setCurrentUrl('');
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    setPageIndex(0); // Reset to first page when filters change
  };

  const filteredData = data.filter((message) => {
    return (
      (filters.speaker === '' || message.speaker.includes(filters.speaker)) &&
      (filters.title === '' || message.title.includes(filters.title)) &&
      (filters.date === '' || message.date.includes(filters.date)) &&
      (filters.length === '' || message.length.includes(filters.length))
    );
  });

  return (
    <div>
      <Paper elevation={3} style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Filters
              filters={[
                { name: 'speaker', options: Array.from(new Set(data.map((item) => item.speaker))) },
                { name: 'title', options: Array.from(new Set(data.map((item) => item.title))) },
              ]}
              onFilterChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Filters
              filters={[
                { name: 'date', options: Array.from(new Set(data.map((item) => item.date))) },
                { name: 'length', options: Array.from(new Set(data.map((item) => item.length))) },
              ]}
              onFilterChange={handleFilterChange}
            />
          </Grid>
        </Grid>
      </Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="bold-header">Speaker</TableCell>
              <TableCell className="bold-header">Title</TableCell>
              <TableCell className="bold-header">Date</TableCell>
              <TableCell className="bold-header">Length</TableCell>
              <TableCell className="bold-header">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize).map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.speaker}</TableCell>
                <TableCell>{message.title}</TableCell>
                <TableCell>{message.date}</TableCell>
                <TableCell>{message.length}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handlePlayClick(message.link)} color="primary">
                    <PlayArrowIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5,10, 15]}
          component="div"
          count={filteredData.length}
          rowsPerPage={pageSize}
          page={pageIndex}
          onPageChange={(event, newPage) => setPageIndex(newPage)}
          onRowsPerPageChange={(event) => {
            setPageSize(parseInt(event.target.value, 5));
            setPageIndex(0); // Reset to first page
          }}
        />
      </TableContainer>
      <MediaPopup open={popupOpen} onClose={handleClosePopup} url={currentUrl} />
    </div>
  );
};

MessageTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      speaker: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MessageTable;


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, IconButton } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import MediaPopup from './MediaModal';

// import Filters from './Filters'; // Ensure you have the Filters component imported

// const MessageTable = ({ data }) => {
//   const [filters, setFilters] = useState({
//     speaker: '',
//     title: '',
//     date: '',
//     length: '',
//   });
//   const [pageIndex, setPageIndex] = useState(0);
//   const [pageSize, setPageSize] = useState(10);

//   const [popupOpen, setPopupOpen] = useState(false);
//   const [currentUrl, setCurrentUrl] = useState('');

//   const handlePlayClick = (link) => {
//     setCurrentUrl(link);
//     setPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setPopupOpen(false);
//     setCurrentUrl('');
//   };

//   const handleFilterChange = (name, value) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//     setPageIndex(0); // Reset to first page when filters change
//   };

 
//   const filteredData = data.filter((message) => {
//     return (
//       (filters.speaker === '' || message.speaker.includes(filters.speaker)) &&
//       (filters.title === '' || message.title.includes(filters.title)) &&
//       (filters.date === '' || message.date.includes(filters.date)) &&
//       (filters.length === '' || message.length.includes(filters.length))
//     );
//   });

//   return (
//     <div>
//       <Filters
//         filters={[
//           { name: 'speaker', options: Array.from(new Set(data.map((item) => item.speaker))) },
//           { name: 'title', options: Array.from(new Set(data.map((item) => item.title))) },
//           { name: 'date', options: Array.from(new Set(data.map((item) => item.date))) },
//           { name: 'length', options: Array.from(new Set(data.map((item) => item.length))) },
//         ]}
//         onFilterChange={handleFilterChange}
//       />
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold' }}>Speaker</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Length</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }}>Link</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize).map((message) => (
//               <TableRow key={message.id}>
//                 <TableCell>{message.speaker}</TableCell>
//                 <TableCell>{message.title}</TableCell>
//                 <TableCell>{message.date}</TableCell>
//                 <TableCell>{message.length}</TableCell>
//                 <TableCell>
//                 <IconButton onClick={() => handlePlayClick(message.link)} color="primary">
//                   <PlayArrowIcon />
//                 </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 50]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={pageSize}
//           page={pageIndex}
//           onPageChange={(event, newPage) => setPageIndex(newPage)}
//           onRowsPerPageChange={(event) => {
//             setPageSize(parseInt(event.target.value, 10));
//             setPageIndex(0); // Reset to first page
//           }}
//         />
//       </TableContainer>
//       <MediaPopup open={popupOpen} onClose={handleClosePopup} url={currentUrl} />
//     </div>
//   );
// };

// MessageTable.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       speaker: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       length: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default MessageTable;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

// const MessageTable = ({ data }) => {
//   // Pagination state
//   const [pageIndex, setPageIndex] = useState(0);
//   const [pageSize, setPageSize] = useState(10);

//   return (
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Speaker</TableCell>
//             <TableCell>Title</TableCell>
//             <TableCell>Date</TableCell>
//             <TableCell>Length</TableCell>
//             <TableCell>Link</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize).map((message) => (
//             <TableRow key={message.id}>
//               <TableCell>{message.speaker}</TableCell>
//               <TableCell>{message.title}</TableCell>
//               <TableCell>{message.date}</TableCell>
//               <TableCell>{message.length}</TableCell>
//               <TableCell>
//                 <a href={message.link} target="_blank" rel="noopener noreferrer">Watch</a>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 50]}
//         component="div"
//         count={data.length}
//         rowsPerPage={pageSize}
//         page={pageIndex}
//         onPageChange={(event, newPage) => setPageIndex(newPage)}
//         onRowsPerPageChange={(event) => {
//           setPageSize(parseInt(event.target.value, 10));
//           setPageIndex(0); // Reset to first page
//         }}
//       />
//     </TableContainer>
//   );
// };

// MessageTable.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       speaker: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       length: PropTypes.string.isRequired,
//       link: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default MessageTable;

