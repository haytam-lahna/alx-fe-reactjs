import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Get API key from environment variables (optional)
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Create axios instance with base configuration
const githubAPI = axios.create({
  baseURL: GITHUB_API_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
});

// Function to fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default githubAPI;
