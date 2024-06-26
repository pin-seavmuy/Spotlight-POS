// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; // Import from vue-router
import AdminDashboard from '../components/AdminDashboard.vue';
import OrdersPage from '../components/Orders.vue'; 
import SoldOut from '../components/Soldout.vue'; 
import CategoryPage from '../components/Category.vue'; 
import ProductPage from '../components/Products.vue'; 
import CustomersPage from '../components/Customers.vue'; 

const routes = [
  { path: '/', component: AdminDashboard },
  { path: '/orders', component: OrdersPage },
  { path: '/sold', component: SoldOut },
  { path: '/category', component: CategoryPage },
  { path: '/products', component: ProductPage },
  { path: '/customers', component: CustomersPage },
  { path: '/customers', component: CustomersPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
