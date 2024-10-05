import axios from 'axios';

// Create an axios instance with your base URL from environment variables
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST, // Use your environment variable here
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // Set a timeout of 10 seconds, for example
});

export default axiosInstance;
