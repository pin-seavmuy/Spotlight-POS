'''
<template>
  <div>
    <header class="header">
      <div class="logo">
        <router-link to="/dashboard">Spotlight</router-link>
      </div>
      <div class="header-icons">
        <font-awesome-icon :icon="icons.bell" class="icon" />
        <div class="account">
          <img src="../assets/img/people.png" alt="" />
          <p v-if="user!=null" style="margin-left: 10px; display: flex;">{{ user.first_name}}</p>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="side-bar">
        <div v-if="user.first_name == 'admin'">
            <router-link to="/dashboard" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.thLarge" class="icons" />
            <p>Dashboard</p>
          </router-link>

          <router-link to="/orders" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Orders</p>
          </router-link>

          <router-link to="/sold" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.database" class="icons" />
            <p>Sold out</p>
          </router-link>

          <router-link to="/category" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.category" class="icons" />
            <p>Category</p>
          </router-link>

          <router-link to="/products" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.product" class="icons" />
            <p>Products</p>
          </router-link>
          <router-link to="/employee" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Employee</p>
          </router-link>
          </div>

          <router-link to="/customers" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Customers</p>
          </router-link>

          <router-link to="/POS" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>POS</p>
          </router-link>
      </div>
      
      <div class="dashboard" v-if="orders">
        <div class="wrapper1">
          <h2>Orders</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="search order">
          </div>
        </div>
        <div class="table">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Customer</th>
              <th>P_ID</th>
              <th>Product</th>
              <th>Size</th>
              <th>Color</th>
              <th>Qty</th>
              <th>Price/Unit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders.orders" :key="order.id">
              <td>{{ index + 1 }}</td>
              <td>{{ order.user.first_name + " " + order.user.last_name }}</td>
              <td>{{ order.pinfo.product_id }}</td>
              <td>{{ order.product.name }}</td>
              <td>{{ order.pinfo.size }}</td>
              <td>{{ order.pinfo.color }}</td>
              <td>{{ order.quantity }}</td>
              <td>{{ '$' + order.product.price }}</td>
              <td>
                <select v-model="order.status"  @change="updateStatus(order.id)">
                  <option value="0">Pending</option>
                  <option value="1">Shipped</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div v-else>
        <h1>No Order have been made by Customer!</h1>
      </div>
        
      
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
  export default {
    name: "OrdersPage",
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        icons: {
          bell: faBell,
          shoppingBasket: faShoppingBasket,
          thLarge: faThLarge,
          database: faDatabase,
          category: faListAlt,
          transaction: faCreditCard,
          product: faBoxOpen,
          users: faUsers,
          search: faSearch,
        },
        showDropdown: false,
        // orders: [
        //   { id: 1, customer: 'John Doe', productId: 'C0001', product: 'Cigarella Skill Shirt', size: 'M', color: 'Black', qty: 2, price: '$50.00', status: 'Pending' },
        //   { id: 2, customer: 'Jane Smith', productId: 'C0002', product: 'Wool Tweed A-Line', size: 'M', color: 'N/A', qty: 1, price: '$15.00', status: 'Pending' },
        //   { id: 3, customer: 'Michael Brown', productId: 'C0003', product: 'Cheyenne Floral Dress', size: 'M', color: 'N/A', qty: 1, price: '$35.00', status: 'Shipped' },
        // ],
        orders: {},
        user: {},
      };
    },
    methods: {
      toggleDropdown() {
          this.showDropdown = !this.showDropdown;
        },
        logout() {
          localStorage.removeItem('token');
         
          this.$router.push('/login');
        },
      getOrder(){
        axios.get('/orders').then((res)=>{
          this.orders = res.data;
          console.log(this.orders);
        }).catch((err)=>{
          console.log(err);
        })
      },
      updateStatus($orderId){
        axios.get('/order/' + $orderId).then((res)=>{
          console.log(res.data);
        }).catch((err)=>{
          console.log(err);
        })
      },
      getUser(){
        axios.get('/user').then((res)=>{
          console.log(res);
          this.user = res.data;
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    mounted() {
      this.getOrder();
      this.getUser();
    },
  };
</script>

<style scoped>
  @import '../assets/css/orders.css';
</style>

'''