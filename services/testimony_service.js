import axios from 'axios';

// Replace with your backend URL
const API_URL = 'http://localhost:4000';
const STORAGE_KEY = 'testimonies';

// Function to read data from localStorage
const readFromLocalStorage = () => {
  return new Promise((resolve) => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      resolve(JSON.parse(data));
    } else {
      resolve([]); // Return an empty array if no data exists
    }
  });
};

// Function to write data to localStorage
const writeToLocalStorage = (data) => {
  return new Promise((resolve) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    resolve();
  });
};

const publish_testimony_to_localStorage = async (newTestimony) => {
  try {
    const existingData = await readFromLocalStorage();
    existingData.push(newTestimony);
    await writeToLocalStorage(existingData);
    return { success: true, message: 'Testimony added successfully' };
  } catch (error) {
    throw new Error('Failed to publish testimony: ' + error.message);
  }
};

const publish_testimony_to_backend = async (newTestimony) => {
  try {
    const response = await axios.post(`${API_URL}/publish-testimony`, newTestimony);
    return response.data;
  } catch (error) {
    throw new Error('Failed to publish testimony to backend: ' + error.message);
  }
};

// Export the function based on the environment variable
export const publish_testimony = process.env.REACT_APP_MOCK_TESTIMONY === 'true' ? publish_testimony_to_localStorage : publish_testimony_to_backend;
