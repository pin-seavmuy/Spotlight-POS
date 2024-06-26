// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; // Import from vue-router
import AdminDashboard from '../components/AdminDashboard.vue';
import Orders from '../components/Orders.vue'; 
import SoldOut from '../components/'; 

const routes = [
  { path: '/', component: AdminDashboard },
  { path: '/orders', component: Orders },
  { path: '/sold', component: SoldOut },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
