// src/router.js
import { createRouter, createWebHistory } from 'vue-router'; // Import from vue-router
import AdminDashboard from '../components/AdminDashboard.vue';
import OrdersPage from '../components/Orders.vue'; 
import SoldOut from '../components/Soldout.vue'; 
import CategoryPage from '../components/Category.vue'; 
import ProductPage from '../components/Products.vue'; 
import CustomersPage from '../components/Customers.vue'; 
import AddCategory from '../components/AddCategory.vue'; 
import AddProduct from '../components/AddProduct.vue'; 
import POS from '@/components/POS.vue';
import Employee from '@/components/Employee.vue';
import AddEmployee from '@/components/AddEmployee.vue';

const routes = [
  { path: '/dashboard', component: AdminDashboard },
  { path: '/orders', component: OrdersPage },
  { path: '/sold', component: SoldOut },
  { path: '/category', component: CategoryPage },
  { path: '/products', component: ProductPage },
  { path: '/customers', component: CustomersPage },
  { path: '/customers/:id', component: CustomersPage, props: true },
  { path: '/customers/add', component: CustomersPage, props: true },
  { path: '/add-category', component: AddCategory },
  { path: '/add-category/:id', component: AddCategory , props: true},
  { path: '/add-product', component: AddProduct },
  { path: '/add-product/:id', component: AddProduct , props: true},
  { path: '/add-product/:id/:pid', component: AddProduct , props: true},
  { path: '/add-product/:id/add', component: AddProduct , props: true},
  { path: '/POS', component: POS },
  { path: '/employee', component:  Employee},
  { path: '/employee/:id', component:  Employee, props: true},
  { path: '/add-employee', component: AddEmployee },
  { path: '/add-employee/:id', component: AddEmployee, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
