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
          <div class="user-dropdown" v-if="user!=null">
              <button @click="toggleDropdown" class="username">{{ user.first_name }}</button>
              <div v-if="showDropdown" class="dropdown-menu">
                <button @click="logout">Log Out</button>
              </div>
            </div>
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
            <h2>Admin Dashboard</h2>
          </div>
          <div class="wrapper1">
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/products.png" />
                <p>Total Product</p>
              </div>
              <div class="qty">{{ products.quantity }}</div>
            </div>
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/list.png" />
                <p>Categories</p>
              </div>
              <div class="qty">{{ categories.quantity }}</div>
            </div>
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/mobile-banking.png" />
                <p>Transactions</p>
              </div>
              <div class="qty">{{ orders.quantity }}</div>
            </div>
          </div>
          <div class="wrapper1">
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/shopping-cart.png" />
                <p>Order Today</p>
              </div>
              <div class="qty">{{ orders.todayItem }}</div>
            </div>
          </div>
        </div>


      
    </div>
    
    
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

  export default {
    name: "AdminDashboard",
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
              // Add more icons as needed
          },
          showDropdown: false,
          user: {},
          products: {},
          categories: {},
          orders: {},
        };
    },
    methods: {
      toggleDropdown() {
          this.showDropdown = !this.showDropdown;
        },
        logout() {
          localStorage.removeItem('token');
         
          this.$router.push('/login');
        },
      getProducts(){
        axios.get('/products').then((res)=>{
          this.products = res.data;
          console.log(this.products);
        }).catch((err)=>{
          console.log(err);
        });
      },
      getCategories(){
        axios.get('/categories').then((res)=>{
          this.categories = res.data;
          console.log(this.categories);
        }).catch((err)=>{
          console.log(err);
        });
      },
      getOrder(){
        axios.get('/orders').then((res)=>{
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
    async mounted() {
      this.getProducts();
      this.getCategories();
      this.getOrder();
      this.getUser();
    },
  };

</script>

<style scoped>
@import '../assets/css/style.css';

.user-dropdown {
    position: relative;
    display: inline-block;
  }

  .username {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .dropdown-menu {
    position: absolute;
    width: 75px;
    top: 100%;
    left: -18px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-menu button {
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }

  .dropdown-menu button:hover {
    background-color: #f1f1f1;
  }
</style>
