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
          <!-- Other menu items -->
        </div>
        <div class="dashboard">
          <router-view /> <!-- This will render the current route's component here -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  // Make sure you have imported necessary FontAwesome icons here
  
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
  