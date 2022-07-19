import axios from 'axios';

const API = axios.create({
    baseURL: 'https://onlinebookingus-app-test.herokuapp.com/api/images/multi-upload'
})


export default API;