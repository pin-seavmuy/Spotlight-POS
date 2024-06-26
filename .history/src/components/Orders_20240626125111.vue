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
          <p>Manage Products</p>
        </router-link>
        <router-link to="/customers" class="wrapper" active-class="active">
          <font-awesome-icon :icon="icons.users" class="icons" />
          <p>Customers</p>
        </router-link>
      </div>
      <div class="content">
        <div class="dashboard">
          <h2>Order</h2>
          <div class="search-container">
            <font-awesome-icon :icon="icons.search" class="search-icon" />
            <input type="text" placeholder="Search orders..." class="search-box" />
          </div>
        </div>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th >No</th>
                <th>Customer</th>
                <th>P_ID</th>
                <th>Product</th>
                <th>Size</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>C0001</td>
                <td>Cigarella Skill Shirt</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>C0002</td>
                <td>Wool Tweed A-Line</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Michael Brown</td>
                <td>C0003</td>
                <td>Cheyenne Floral Dress</td>
                <td>$250.00</td>
              </tr>
              <!-- Add more rows as needed -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';

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
      };
    },
  };
</script>

<style scoped>
  @import '../assets/css/orders.css';

  
</style>
