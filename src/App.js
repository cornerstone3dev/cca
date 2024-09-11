import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Messages from './pages/Messages';
import Admin from './pages/AdminLandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import { login, logout, isAuthenticated,useAutoLogout } from './services/auth';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [auth, setAuth] = useState(isAuthenticated()); // Initialize state based on local storage

  const handleLogin = async (username, password) => {
    try {
      const token = await login(username, password);
      setAuth(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    logout();
    setAuth(false);
  };

  useEffect(() => {
    // Ensure auth state matches local storage
    setAuth(isAuthenticated());
  }, []);

  useAutoLogout(); // Automatically log out after inactivity

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<LoginPage login={handleLogin} />} />
        <Route path="/logout" element={<LogoutPage logout={handleLogout} />} />
        <Route
          path="/admin"
          element={auth ? <Admin /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin/dashboard"
          element={auth ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
