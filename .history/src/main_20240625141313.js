// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '/';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

