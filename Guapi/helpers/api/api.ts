import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.191.89.196:8000/api/',
});

export default api;