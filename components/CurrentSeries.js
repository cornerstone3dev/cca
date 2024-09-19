import {  Typography,Paper } from '@mui/material';
import { styled } from '@mui/system';
// export default LandingPage;
const TeachingContainer = styled(Paper)({
    padding: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  });
  
  const CurrentTeaching = ({ title, scripture }) => {
    return (
      <TeachingContainer>
        <Typography variant="h5" gutterBottom>
          Current Teaching Series
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          <strong>Anchor Scripture:</strong> {scripture}
        </Typography>
      </TeachingContainer>
    );
  };
  
  export default CurrentTeaching;