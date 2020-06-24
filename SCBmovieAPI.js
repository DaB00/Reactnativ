import axios from 'axios';
const api = axios.create({
    baseURL:'http://scb-movies-api.herokuapp.com',
    headers:{'api-Key':'636e93c080bb67c99b431116f81d361cb6634d60'}
})
export default api