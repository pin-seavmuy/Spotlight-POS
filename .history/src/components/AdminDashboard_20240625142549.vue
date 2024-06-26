<template>
    <div>
      <header class="header">
        <div class="logo">
          <a href="#">Spotlight</a>
        </div>
        <div class="header-icons">
          <font-awesome-icon class="icon" icon="bell" />
          <div class="account">
            <img src="../assets/img/people.png" alt="" />
            <p>ASUS</p>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="side-bar">
          <div class="wrapper active">
            <font-awesome-icon class="" icon="th-large" />
            <p>Dashboard</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon icon="shopping-basket" />
            <p>Orders</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon icon="database" />
            <p>Manage Products</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon icon="list-alt" />
            <p>Sold out</p>
          </div>
          <div class="wrapper">
            <font-awesome-icon icon="users" />
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
  
  export default {
    name: "AdminDashboard",
    components: {
      FontAwesomeIcon,
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/css/style.css';
  </style>
  