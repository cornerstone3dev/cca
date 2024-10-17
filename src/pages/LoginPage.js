import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, Typography, Avatar, Box } from '@mui/material';
import '../styles/login.css'; // Import the CSS file
import redeemLogo from '../assets/redeem_logo.png';
import { styled } from '@mui/system';
import { Person, Lock } from '@mui/icons-material';

// import RccgAdminIcon from '../components/gear';
const LogoContainer = styled('div')({
  width: '70px',  // Width of the circle
  height: '70px', // Height of the circle
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const LogoImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensures the image covers the circle
});


const LoginPage = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/admin');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    // <div className="login-container">
    //   <Card className="login-card">
    //     <Box className="logo-wrapper">
    //       <Box className="gear">
    //         {/* Replace with your logo path */}
    //         {/* <Avatar src={redeemLogo} className="logo" /> */}
    //       <LogoContainer>
    //       <LogoImage src={redeemLogo} />
    //      </LogoContainer>
    //       </Box>
    //     </Box>
    //     <Typography variant="h5" component="h1" gutterBottom>
    //       Cornerstone Church Austin Login
    //     </Typography>
    //     <form className="login-form" onSubmit={handleSubmit}>
    //       <TextField
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="username"
    //         label="Username"
    //         name="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         autoFocus
    //       />
    //       <TextField
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         label="Password"
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         color="primary"
    //         className="login-submit"
    //       >
    //         Login
    //       </Button>
    //     </form>
    //   </Card>
    // </div>

    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required/>
          <Person className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required/>
          <Lock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox' />Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>

        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>Don't have an account <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/login.css'; // Import the CSS file

// const LoginPage = ({ login }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(username, password);
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             required
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = ({ login }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(username, password);
//       navigate('/dashboard');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;