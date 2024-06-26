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
          <h2>Products</h2>
          <div class="search-container">
            <font-awesome-icon :icon="icons.search" class="search-icon" />
            <input type="text" placeholder="Search orders..." class="search-box" />
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
              <tr v-for="(order, index) in orders" :key="order.id">
                <td>{{ index + 1 }}</td>
                <td>{{ order.customer }}</td>
                <td>{{ order.productId }}</td>
                <td>{{ order.product }}</td>
                <td>{{ order.size }}</td>
                <td>{{ order.color }}</td>
                <td>{{ order.qty }}</td>
                <td>{{ order.price }}</td>
                <td>
                  <select v-model="order.status">
                    <option value="Pending">Processing</option>
                    <option value="Shipped">Shipped</option>
                  </select>
                </td>
              </tr>
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
    name: "ProductPage",
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
        orders: [
          { id: 1, customer: 'John Doe', productId: 'C0001', product: 'Cigarella Skill Shirt', size: 'M', color: 'Black', qty: 2, price: '$50.00', status: 'Pending' },
          { id: 2, customer: 'Jane Smith', productId: 'C0002', product: 'Wool Tweed A-Line', size: 'M', color: 'N/A', qty: 1, price: '$15.00', status: 'Pending' },
          { id: 3, customer: 'Michael Brown', productId: 'C0003', product: 'Cheyenne Floral Dress', size: 'M', color: 'N/A', qty: 1, price: '$35.00', status: 'Shipped' },
          
        ],
      };
    },
  };
</script>

<style scoped>
  @import '../assets/css/category.css';
</style>
