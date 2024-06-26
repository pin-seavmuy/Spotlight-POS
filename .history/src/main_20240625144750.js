// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from '../'; // Import the router

Vue.config.productionTip = false;

new Vue({
  router, // Use the router
  render: h => h(App),
}).$mount('#app');
