// OrdersPage.vue
<template>
  <div>
    
   
  </div>
</template>

<script>
  // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers } from '@fortawesome/free-solid-svg-icons';
  import AdminDashboard from './AdminDashboard.vue';  // Adjust the path as necessary

  export default {
    name: "OrdersPage",
    components: {
      // FontAwesomeIcon,
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
