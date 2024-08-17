import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Admin from './pages/AdminLandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import { login, logout, isAuthenticated } from './services/auth';

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
