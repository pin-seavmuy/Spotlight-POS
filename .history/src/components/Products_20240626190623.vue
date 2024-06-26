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
          <h2>Products</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="search clothes, orders, and more....">
          </div>
          <router-link to="/add-category">
            <div class="add">
              <font-awesome-icon :icon="icons.plus" class="icons" />
              <p>ADD</p>
            </div>
          </router-link>
        </div>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>P_ID</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, index) in orders" :key="order.id">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="../assets/"  width="50" height="50" />
                </td>
                <td>{{ order.productID }}</td>
                <td>{{ order.category }}</td>
                <td class="action">
                  <font-awesome-icon :icon="icons.edit" class="icon action-icon" @click="editOrder(order.id)" />
                  <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteOrder(order.id)" />
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
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

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
          edit: faEdit,
          trash: faTrash,
          plus: faPlus,
        },
        orders: [
          { id: 1, image: '../assets/img/people.png', productID: 'C0001', category: "Dress" },
          { id: 2, image: '../assets/img/people.png', productID: 'C0002', category: "Hoodie" },
          { id: 3, image: '../assets/img/people.png', productID: 'C0003', category: "T-shirt" },
        ],
      };
    },
    // methods: {
    //   editOrder(id) {
    //     // Edit order logic here
    //   },
    //   deleteOrder(id) {
    //     // Delete order logic here
    //   },
    // },
  };
</script>

<style scoped>
  @import '../assets/css/orders.css';

  .action {
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 15px;
    border-width: 0.1;
  }

  .action-icon {
    cursor: pointer;
  }
</style>
