// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; // Import from vue-router
import AdminDashboard from '../components/AdminDashboard.vue';
import Orders from '../components/Orders.vue'; 
import SoldOut from '../components/Soldout.vue'; 
import CategoryPage from '../components/Category.vue'; 
import CategoryPage from '../components/Category.vue'; 

const routes = [
  { path: '/', component: AdminDashboard },
  { path: '/orders', component: Orders },
  { path: '/sold', component: SoldOut },
  { path: '/category', component: CategoryPage },
  { path: '/category', component: CategoryPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
