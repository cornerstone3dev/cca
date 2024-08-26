import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import HomePage2 from './pages/Home';
import Messages from './pages/Messages';
import Admin from './pages/AdminLandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';

import Test1 from './pages/test1';
import Test2 from './pages/test2';
import Test3 from './pages/test3';
import Test4 from './pages/test4';
import Test5 from './pages/test5';
import Test6 from './pages/test6';
import Test7 from './pages/test7';
import Test8 from './pages/test8';
import Test9 from './pages/test9';


import { login, logout, isAuthenticated, useAutoLogout } from './services/auth';
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
        <Route path="/cca" element={<Test9 />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/test4" element={<Test4 />} />
        <Route path="/test5" element={<Test5 />} />
        <Route path="/test6" element={<Test6 />} />
        <Route path="/test7" element={<Test7 />} />
        <Route path="/test8" element={<Test8 />} />
        <Route path="/test9" element={<Test9 />} />

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
