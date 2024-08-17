// services/dashboardService.js

import axios from 'axios';
import mockData from '../data/mock_dashboard_data.json'; // Adjust the path as needed

const API_URL = 'http://localhost:4000'; // Replace with your backend URL

// Function to get mock data directly from the imported JSON
const getMockData = async () => {
  // Simulate a delay for mock data
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

// Function to fetch real data from the backend
const fetchRealData = async () => {
  try {
    const response = await axios.get(`${API_URL}/dashboard-data`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the backend: ' + error.message);
  }
};

// Export the function based on the environment variable
export const getDashboardData = process.env.REACT_APP_MOCK_DASHBOARD === 'true' ? getMockData : fetchRealData;


