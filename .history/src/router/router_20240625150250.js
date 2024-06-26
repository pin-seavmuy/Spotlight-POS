// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminDashboard from '../components/AdminDashboard.vue';
import Orders from '@/components/Orders.vue'; // Assuming the path alias '@' points to src/ directory

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AdminDashboard },
  { path: '/orders', component: Orders },
];

const router = new VueRouter({
  mode: 'history', // Use HTML5 History API for clean URLs
  routes,
});

export default router;
