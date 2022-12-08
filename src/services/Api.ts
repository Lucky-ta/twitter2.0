import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://twitter20-backend-production.up.railway.app/',
});

export default Api;
