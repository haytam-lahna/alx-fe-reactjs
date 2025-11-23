import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Get API key from environment variables (optional)
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Create axios instance with base configuration
const githubAPI = axios.create({
  baseURL: GITHUB_API_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {}
});

// Function to search for GitHub users
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to get user details
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export default githubAPI;
