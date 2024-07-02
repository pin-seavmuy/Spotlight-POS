// src/main.js
import { createApp } from 'vue'; // Use createApp instead of importing Vue
import App from './App.vue';
import router from './router/router.js'; // Adjust the path as necessary
import axios from 'axios';
import './assets/css/dropdown.css';

axios.defaults.baseURL = 'http://localhost:8000/api';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete config.headers['Authorization'];
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const app = createApp(App);
app.use(router);

app.mount('#app');
