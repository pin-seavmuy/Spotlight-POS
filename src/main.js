// src/main.js
import { createApp } from 'vue'; // Use createApp instead of importing Vue
import App from './App.vue';
import router from './router/router.js'; // Adjust the path as necessary
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

const app = createApp(App);
app.use(router);

app.mount('#app');
