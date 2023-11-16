import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8030/feedbackService', // Update with your API endpoint
});

export default instance;