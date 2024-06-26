// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminDashboard from './components/AdminDashboard.vue';
import Orders from './components/Orders.vue'; // Import your Orders component

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AdminDashboard },
  { path: '/orders', component: Orders },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
