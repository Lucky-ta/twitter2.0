import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://twitter-clone-bac-kend.herokuapp.com',
});

export default Api;
