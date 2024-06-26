<template>
    <div>
      <header class="header">
        <div class="logo">
          <router-link to="/">Spotlight</router-link>
        </div>
        <div class="header-icons">
          <font-awesome-icon :icon="icons.bell" class="icon" />
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

          <router-link to="/sold" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Sold out</p>
          </router-link>

          <router-link to="/category" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Category</p>
          </router-link>

          <router-link to="/product" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Mange Products</p>
          </router-link>

          <router-link to="/customers" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.shoppingBasket" class="icons" />
            <p>Customers</p>
          </router-link>

        </div>
        <div class="dashboard">
          <h2>Order</h2>
          
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge } from '@fortawesome/free-solid-svg-icons';
  
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
        //   database: faDatabase,,

          // Add more icons as needed
        },
      };
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/css/style.css';
  </style>
  