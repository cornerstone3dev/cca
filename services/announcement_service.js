import axios from 'axios';
import announcements from '../data/mock_announcement_prompt_data.json'

// Replace with your backend URL
const API_URL = 'http://localhost:4000';
const STORAGE_KEY = 'announcements';



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

// Function to get announcements from localStorage
const get_announcements_from_localStorage = () => {
  return readFromLocalStorage();
};

// Function to delete an announcement from localStorage
const delete_announcement_from_localStorage = async (id) => {
  try {
    const existingData = await readFromLocalStorage();
    const updatedData = existingData.filter(announcement => announcement.id !== id);
    await writeToLocalStorage(updatedData);
    return { success: true, message: 'Announcement deleted successfully' };
  } catch (error) {
    throw new Error('Failed to delete announcement: ' + error.message);
  }
};

// Function to publish announcement to localStorage
const publish_announcement_to_localStorage = async (newAnnouncement) => {
  try {
    const existingData = await readFromLocalStorage();
    existingData.push(newAnnouncement);
    await writeToLocalStorage(existingData);
    return { success: true, message: 'Announcement added successfully' };
  } catch (error) {
    throw new Error('Failed to publish announcement: ' + error.message);
  }
};

// Function to get announcements from backend
const get_announcements_from_backend = async () => {
  try {
    const response = await axios.get(`${API_URL}/announcements`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch announcements from backend: ' + error.message);
  }
};

// Function to delete an announcement from backend
const delete_announcement_from_backend = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/announcements/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete announcement from backend: ' + error.message);
  }
};

// Function to publish announcement to backend
const publish_announcement_to_backend = async (newAnnouncement) => {
  try {
    const response = await axios.post(`${API_URL}/publish-announcement`, newAnnouncement);
    return response.data;
  } catch (error) {
    throw new Error('Failed to publish announcement to backend: ' + error.message);
  }
};

// Export functions based on environment variable
export const publish_announcements = process.env.REACT_APP_MOCK_ANNOUNCEMENT === 'true'
  ? publish_announcement_to_localStorage
  : publish_announcement_to_backend;

export const get_announcements = process.env.REACT_APP_MOCK_ANNOUNCEMENT === 'true'
  ? get_announcements_from_localStorage
  : get_announcements_from_backend;

export const delete_announcement = process.env.REACT_APP_MOCK_ANNOUNCEMENT === 'true'
  ? delete_announcement_from_localStorage
  : delete_announcement_from_backend;


  export const seed_local_storage = () => {
    localStorage.setItem(STORAGE_KEY, announcements);
  };