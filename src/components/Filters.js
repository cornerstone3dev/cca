import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

const Filters = ({ filters, onFilterChange }) => {
  if (!Array.isArray(filters) || filters.length === 0) {
    return <Typography>No filters available</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} mb={2}>
      {filters.map((filter, index) => (
        <FormControl key={filter.name} fullWidth>
          <InputLabel>{filter.name}</InputLabel>
          <Select
            onChange={(e) => onFilterChange(filter.name, e.target.value)}
            defaultValue=""
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {filter.options.map((option, i) => (
              <MenuItem key={i} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

// const Filters = ({ filters, onFilterChange }) => {
//   // Ensure filters is an array and has items
//   if (!Array.isArray(filters) || filters.length === 0) {
//     return <Typography>No filters available</Typography>;
//   }

//   return (
//     <Box display="flex" flexDirection="column" gap={2} mb={2}>
//       {filters.map((filter, index) => (
//         <FormControl key={index} fullWidth>
//           <InputLabel>{filter.name}</InputLabel>
//           <Select
//             onChange={(e) => onFilterChange(filter.name, e.target.value)}
//             defaultValue=""
//           >
//             <MenuItem value=""><em>None</em></MenuItem>
//             {filter.options.map((option, i) => (
//               <MenuItem key={i} value={option}>{option}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       ))}
//     </Box>
//   );
// };

// Filters.propTypes = {
//   filters: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   ).isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// };

// export default Filters;



// import React from 'react';
// import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';


// const Filters = ({ filters, onFilterChange }) => {
//   console.log('Filters prop:', filters); // Debug filters prop

//   if (!filters || !Array.isArray(filters) || filters.length === 0) {
//     return <Typography>No filters available</Typography>;
//   }

//   return (
//     <Box display="flex" flexDirection="column" gap={2} mb={2}>
//       {filters.map((filter, index) => (
//         <FormControl key={index} fullWidth>
//           <InputLabel>{filter.name}</InputLabel>
//           <Select
//             onChange={(e) => onFilterChange(filter.name, e.target.value)}
//             defaultValue=""
//           >
//             <MenuItem value=""><em>None</em></MenuItem>
//             {filter.options.map((option, i) => (
//               <MenuItem key={i} value={option}>{option}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       ))}
//     </Box>
//   );
// };

// export default Filters;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';



// const Filters = ({ filters, onFilterChange }) => {
//   if (!Array.isArray(filters) || filters.length === 0) {
//     return <Typography>No filters available</Typography>;
//   }

//   return (
//     <Box display="flex" flexDirection="column" gap={2} mb={2}>
//       {filters.map((filter, index) => (
//         <FormControl key={index} fullWidth>
//           <InputLabel>{filter.name}</InputLabel>
//           <Select
//             onChange={(e) => onFilterChange(filter.name, e.target.value)}
//             defaultValue=""
//           >
//             <MenuItem value=""><em>None</em></MenuItem>
//             {filter.options.map((option, i) => (
//               <MenuItem key={i} value={option}>{option}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       ))}
//     </Box>
//   );
// };

// Filters.propTypes = {
//   filters: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   ).isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// };

// export default Filters;

