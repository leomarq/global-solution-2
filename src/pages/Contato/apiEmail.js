import axios from 'axios';

const apiEmail = axios.create({
    baseURL: 'http://localhost.com:3001/'
});

export default apiEmail;