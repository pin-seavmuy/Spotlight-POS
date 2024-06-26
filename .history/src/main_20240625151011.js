// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js'; 
import router from './'; 

Vue.config.productionTip = false;

new Vue({
  router, // Inject the router instance into the Vue instance
  render: h => h(App),
}).$mount('#app');
