import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tech-novation.firebaseio.com/'
});

export default instance;