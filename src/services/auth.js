// src/auth.js
// src/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Replace with your back
const mockUsers = [
    { username: 'admin', password: 'calvin' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more users as needed
  ];
  
  // const mock_login = async (username, password) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const user = mockUsers.find(
  //         (user) => user.username === username && user.password === password
  //       );
  //       if (user) {
  //         const token = `mock-jwt-token-${username}`; // Generate a unique token per user
  //         localStorage.setItem('token', token);
  //         resolve(token);
  //       } else {
  //         reject(new Error('Invalid username or password'));
  //       }
  //     }, 1000); // Simulate a delay of 1 second
  //   });
  // };

  export const mock_login_v2 = async (username, password) => {
    // Simulate login logic
    if (username === 'user' && password === 'password') {
      // Simulate token storage
      const token = `mock-jwt-token-${username}`;
      localStorage.setItem(token, 'mock-token');
      return 'mock-token';
    } else {
      throw new Error('Invalid credentials');
    }
  };
  
  
  // The realLogin function remains unchanged
  const real_login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      return token;
    } catch (error) {
      throw new Error('Invalid username or password');
    }
  };







  
  export const login = process.env.REACT_APP_MOCK_LOGIN === 'true' ? mock_login_v2 : real_login;
  
  export const logout = () => {
    localStorage.removeItem('token');
  };
  
  

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
