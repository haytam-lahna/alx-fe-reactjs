import axios from 'axios';

const GITHUB_API_URL = ["https://api.github.com/search/users?q"];

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

// Function to perform advanced search with multiple criteria
export const searchUsers = async (searchParams) => {
  try {
    // Build query string from search parameters
    let query = '';
    
    if (searchParams.username) {
      query += searchParams.username;
    }
    
    if (searchParams.location) {
      query += `${query ? '+' : ''}location:${searchParams.location}`;
    }
    
    if (searchParams.minRepos) {
      query += `${query ? '+' : ''}repos:>=${searchParams.minRepos}`;
    }

    const response = await githubAPI.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export default githubAPI;
