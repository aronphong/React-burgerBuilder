import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-15119.firebaseio.com/'
});

export default instance;
