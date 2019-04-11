import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-tabgyn.herokuapp.com'
});

export default api;
