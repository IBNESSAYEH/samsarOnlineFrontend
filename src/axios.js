


import axios from 'axios';
import { router } from './router';

// Create an instance of axios
const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`, // Your base URL
});

// Request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    
     
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Do something with response error
    if (error.response && error.response.status === 401) {
      router.navigate('/login'); // Redirect to login page for unauthorized requests
    }
    
    return Promise.reject(error);
  }
);

export default axiosClient;
