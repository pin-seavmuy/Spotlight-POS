<template>
  <div>
    <header class="header">
      <div class="logo">
        <router-link to="/dashboard">Spotlight</router-link>
      </div>
      <div class="header-icons">
        <font-awesome-icon :icon="icons.bell" class="icon" />
        <div class="account">
          <img src="../assets/img/people.png" alt="" />
          <p v-if="user!=null" style="margin-left: 10px; display: flex;">{{ user.first_name}}</p>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="side-bar">

        <div v-if="user.first_name == 'admin'">
            <router-link to="/dashboard" class="wrapper" active-class="active">
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
          <router-link to="/employee" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Employee</p>
          </router-link>
          </div>

          <router-link to="/customers" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Customers</p>
          </router-link>

          <router-link to="/POS" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>POS</p>
          </router-link>
      </div>
      <div class="dashboard">
        <div class="wrapper1">
          <h2>Orders</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="search ...">
          </div>
        </div>
        <div class="table" v-if="orders.status == 'true'">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Size</th>
                <th>Color</th>
                <th>Total</th>
                <th>Order Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              <tr  v-for="(order, index) in orders.orders" :key="order.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ order.user.first_name + " " + order.user.last_name }}</td>
                    <td>{{ order.product.name }}</td>
                    <td>{{ order.pinfo.size }}</td>
                    <td>{{ order.pinfo.color }}</td>
                    <td>{{ '$' + order.total }}</td>
                    <td>{{ order.created_at.split('T')[0] + ' '  + order.created_at.split('T')[1].split(':')[0] + ':' + order.created_at.split('T')[1].split(':')[1] }}</td>
                    <td class="action">
                      <font-awesome-icon :icon="icons.edit" class="icon action-icon" @click="editOrder(order.id)" />
                      <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteOrder(order.id)" />
                    </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <h1 style="display: flex; justify-content: center">{{ orders.message }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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
          edit: faEdit,
          trash: faTrash,
        },
        orders: [
          { id: 1, customer: 'John Doe', product: 'Cigarella Skill Shirt', total: '$50.00', orderDate: '26/06/24' },
          { id: 2, customer: 'Jane Smith', product: 'Wool Tweed A-Line', total: '$15.00', orderDate: '26/06/24' },
          { id: 3, customer: 'Michael Brown', product: 'Cheyenne Floral Dress', total: '$35.00', orderDate: '26/06/24'},
        ],
        user: {},
        showDropdown: false,
      };
    },
    methods: {
      editOrder(id) {
        // Implement edit order functionality
        console.log('Edit order', id);
      },
      toggleDropdown() {
          this.showDropdown = !this.showDropdown;
        },
        logout() {
          localStorage.removeItem('token');
          
          this.$router.push('/login');
        },
      deleteOrder(id) {
        axios.get('/order/delete/' + id).then((res)=>{
          console.log(res);
          this.getOrder();
        }).catch((err)=>{
          console.log(err);
        })
      },
      getOrder(){
        axios.get('/order/sold').then((res)=>{
          this.orders = res.data;
          console.log(this.orders);
        }).catch((err)=>{
          console.log(err);
        })
      },
      getUser(){
        axios.get('/user').then((res)=>{
          console.log(res);
          this.user = res.data;
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    mounted() {
      this.getOrder();
      this.getUser();
    },
  };
</script>

<style scoped>
  @import '../assets/css/style.css';

  .action-icon {
    cursor: pointer;
    margin-right: 10px;
  }
  .action {
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 15px ; 
    border-width: 0.1;
  }
</style>
