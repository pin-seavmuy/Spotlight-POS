// OrdersPage.vue
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
      
      <div class="dashboard">
        <h2>Orders</h2>
        <AdminDashboard />
      </div>

    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers } from '@fortawesome/free-solid-svg-icons';
  import AdminDashboard from './AdminDashboard.vue';  // Adjust the path as necessary

  export default {
    name: "OrdersPage",
    components: {
      FontAwesomeIcon,
      AdminDashboard,  // Add the AdminDashboard component here
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
        },
      };
    },
  };
</script>

<style scoped>
@import '../assets/css/style.css';
</style>
