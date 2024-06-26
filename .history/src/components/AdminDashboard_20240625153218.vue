<template>
    <div>
      <header class="header">
        <div class="logo">
          <router-link to="/">Spotlight</router-link>
        </div>
        <div class="header-icons">
          <font-awesome-icon :icon="icons.bell" class="icon" />
          <!-- Example of using FontAwesomeIcon with bound icon prop -->
          <div class="account">
            <img src="../assets/img/people.png" alt="" />
            <p>ASUS</p>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="side-bar">

          <router-link to="/" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.thLarge" class="icons" />
            <p>Dashboard</p>
          </router-link>

          <router-link to="/orders" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Orders</p>
          </router-link>

          <router-link to="/orders" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Sold</p>
          </router-link>

          <div class="wrapper">
            <font-awesome-icon class="icons" icon="list-alt" />
            <p>Sold out</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon class="icons" icon="th-large" />
            <p>Categories</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon class="icons" icon="database" />
            <p>Manage Products</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon class="icons" icon="users" />
            <p>Customers</p>
          </div>
        </div>
        <div class="dashboard">
          <h2>Admin Dashboard</h2>
          <div class="wrapper1">
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/products.png" />
                <p>Total Product</p>
              </div>
              <div class="qty">12000</div>
            </div>
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/list.png" />
                <p>Categories</p>
              </div>
              <div class="qty">43</div>
            </div>
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/mobile-banking.png" />
                <p>Transactions</p>
              </div>
              <div class="qty">669</div>
            </div>
          </div>
          <div class="wrapper1">
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/shopping-cart.png" />
                <p>Order Today</p>
              </div>
              <div class="qty">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge } from '@fortawesome/free-solid-svg-icons';
  
  export default {
    name: "AdminDashboard",
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        icons: {
          bell: faBell,
          shoppingBasket: faShoppingBasket,
          thLarge: faThLarge,
          // Add more icons as needed
        },
      };
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/css/style.css';
  </style>
  