<template>
    <div>
      <header class="header">
        <div class="logo">
          <router-link to="/">Spotlight</router-link>
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
          <router-link to="/" class="wrapper" active-class="active">
            <font-awesome-icon class="icons" icon="th-large" />
            <p>Dashboard</p>
          </router-link>
          <router-link to="/orders" class="wrapper" active-class="active">
            <font-awesome-icon class="icons" icon="shopping-basket" />
            <p>Orders</p>
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
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default {
    name: "AdminDashboardd",
    components: {
      FontAwesomeIcon,
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/css/style.css';
  </style>
  