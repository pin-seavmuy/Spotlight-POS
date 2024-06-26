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

          <router-link to="/customers" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Customers</p>
          </router-link>

        </div>
        <div class="dashboard">
          <div class="wrapper1">
            <h2>Orders</h2>
            <div class="searchBox">
              <font-awesome-icon :icon="icons.search" class="icons" />
              <input type="text" placeholder="search order">
            </div>

            
          </div>
        
      </div>
        
      </div>
    </div>
  </template>
  
  <script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';

    export default {
    name: "CategoryPage",
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
            plus: faPlus
            // Add more icons as needed
        },
        };
    },
    };

  </script>
  
  <style scoped>
  @import '../assets/css/category.css';
  </style>
  