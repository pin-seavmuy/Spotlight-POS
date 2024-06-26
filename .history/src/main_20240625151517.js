// src/main.js
import Vue from 'vue';
import App from './App.vue';
// import router from './router/router.js'; 
// import router from './router/router'; 

Vue.config.productionTip = false;

new Vue({
  router, // Inject the router instance into the Vue instance
  render: h => h(App),
}).$mount('#app');


// src/main.js
import { createApp } from 'vue'; // Use createApp instead of importing Vue
// import App from './App.vue';
import router from './router/router.js'; // Adjust the path as necessary

const app = createApp(App);
app.use(router);

app.mount('#app');
