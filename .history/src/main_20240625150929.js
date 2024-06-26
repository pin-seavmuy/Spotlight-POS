// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from '.'; // Adjust the path as necessary

Vue.config.productionTip = false;

new Vue({
  router, // Inject the router instance into the Vue instance
  render: h => h(App),
}).$mount('#app');
