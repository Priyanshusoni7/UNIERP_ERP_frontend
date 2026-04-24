import axios from 'axios';

// IMPORTANT: Do not change this to localhost:8085! 
// The Vite proxy handles forwarding requests so cookies work correctly.
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth APIs
export const loginUser = (credentials) => api.post('/api/auth/login', credentials);
export const registerUser = (data) => api.post('/api/auth/register', data);
export const logoutUser = () => api.post('/api/auth/logout');

// Dashboard APIs
export const getProfile = (userId) => api.get(`/api/dashboard/profile/${userId}`);
export const getQuickLinks = (userId) => api.get(`/api/dashboard/quick-links/${userId}`);
export const getCourses = (userId) => api.get(`/api/dashboard/courses/${userId}`);

// Test
export const testAPI = () => api.get('/api/test');

export default api;
