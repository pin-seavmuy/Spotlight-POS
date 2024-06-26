// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; // Import from vue-router
import AdminDashboard from '../components/AdminDashboard.vue';
import Orders from '../components/Orders.vue'; // Adjust the path as necessary

const routes = [
  { path: '/', component: AdminDashboard },
  { path: '/orders', component: Orders },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
