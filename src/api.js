import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'; 
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'; 

export default api;