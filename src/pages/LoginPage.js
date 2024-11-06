import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  Typography,
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange, orange } from "@mui/material/colors";
import "../styles/login.css"; // Import the CSS file
import ccaLogo from "../assets/cca_logo.png";
import AnimatedNavbar from "../components/NavBar";
import { styled } from "@mui/system";

// import RccgAdminIcon from '../components/gear';
const LogoContainer = styled("div")({
  width: "100px", // Width of the circle
  height: "100px", // Height of the circle
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const LogoImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover", // Ensures the image covers the circle
});

const LoginPage = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/admin");
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="login-container">
      <AnimatedNavbar />
      <Card className="login-card" sx={{ backgroundColor: "#f6f6f6" }}>
        <Box className="logo-wrapper">
          {/* <Box className="gear"> */}
          {/* Replace with your logo path */}
          {/* <Avatar src={redeemLogo} className="logo" /> */}
          <LogoContainer>
            <LogoImage src={ccaLogo} />
          </LogoContainer>
          {/* </Box> */}
        </Box>
        <Typography variant="h5" component="h1" gutterBottom>
          Cornerstone Church Austin Login
        </Typography>
        <Typography variant="p" component="p" paragraph align="center">
          Welcome back, Admin! Please log in to manage your website's content,
          settings, and user interactions.
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
          Don't have access yet?{" "}
          <a href="#" className="admin-access">Request Admin Access</a>
        </Typography>
        <form className="login-form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="login-submit"
          >
            SIGN IN
          </Button>
        </form>
        <div  className="forgot-password">
        <Typography variant="p" component="p">
          <a href="#">Forgot password?</a>
        </Typography>
        </div>
      </Card>
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
