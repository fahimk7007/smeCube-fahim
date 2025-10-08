// File: src/services/api.js
<<<<<<< HEAD
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
=======
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
  },
  timeout: 10000,
});

// Request interceptor - add token to all requests
api.interceptors.request.use(
  (config) => {
<<<<<<< HEAD
    const token = localStorage.getItem("token");
=======
    const token = localStorage.getItem('token');
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
<<<<<<< HEAD
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
=======
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
    }
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
export default api;
=======
export default api;
>>>>>>> dbd91fd4fae16a0f5e8cfe5546eebc9184da33ce
