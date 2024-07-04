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
  
          <router-link to="/products" class="wrapper">
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
        <form v-if="id==null" @submit.prevent="createCategory(name)">
          <div class="formBox">
            <h2>Create Category</h2>
            <font-awesome-icon :icon="icons.edit" class="icons" />
          </div>
          <br>
          <div v-if="status" class="messageContainer">
            <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
          </div>
          <br/><br/>
          <div class="formBox">
            <label>Category</label>
            <input v-model="name" type="text" placeholder="Category">
          </div>
          <br/>
          <div class="buttonSubmit">
            <router-link to="/category">
              <button class="submit" type="submit" value="Create Category">Cancel</button>
            </router-link>
            <input class="submit" type="submit" value="Create Category">
          </div>
        </form>

        <form v-else @submit.prevent="updateCategory(name)">
          <div class="formBox">
            <h2>Update Category</h2>
            <font-awesome-icon :icon="icons.edit" class="icons" />
          </div>
          <br>
          <div v-if="status" class="messageContainer">
            <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
          </div>
          <br/><br/>
          <div class="formBox">
            <label>Category</label>
            <input v-model="name" type="text" placeholder="Category">
          </div>
          <br/>
          <div class="buttonSubmit">
            <router-link to="/category">
              <button class="submit" type="submit" value="Create Category">Cancel</button>
            </router-link>
            <input class="submit" type="submit" value="Update Category">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

  export default {
    name: "AddCategory",
    components: {
      FontAwesomeIcon,
    },
    props:[
      'id'
    ],
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
        },
        category: {},
        showDropdown: false,
        user: {},
        name: "",
        message: "",
        status: false,
        messageStatus: false,
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
      createCategory(name){
        axios.post('/category',{
          'name': name
        }).then((res)=>{
          console.log(res);
          this.message = res.data.message;
          this.messageStatus = res.data.status;
          this.status = true;

          setTimeout(() => {
            this.status = false;
          }, 2000);
        }).catch((err)=>{
          console.log(err);
        })
      },
      updateCategory(name){
        axios.post('/category/' + this.id,{
            'name': name
          }
        ).then((res)=>{
          console.log(res);
          console.log(res);
          this.message = res.data.message;
          this.messageStatus = res.data.status;
          this.status = true;

          setTimeout(() => {
            this.status = false;
          }, 2000);
        }).catch((err)=>{
          console.log(err);
        })
      },
      getCategory(){
        if(this.id!=null){
          axios.get('/category/id/'+this.id).then((res)=>{
            console.log(res.data);
            this.name = res.data.category.name;
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      getUser(){
        axios.get('/user').then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      },

    },
    mounted() {
      this.getCategory();
      this.getUser();
      console.log(this.id);
    },
  };
</script>

<style scoped>
  @import '../assets/css/category.css';

  form {
    width: 600px;
    height: 300px;
    background-color: #97b0937f;
    padding: 10px 20px;
    border-radius: 10px;
  }
  .formBox {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  .dashboard{
    position: relative;
  }
  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
  }
  .submit {
    width: 150px;
    height: 40px;
    background-color: #97b0937f;
    border: 1px solid gray;
    /* margin: 10px 0 0 200px; */
  }
  .messageBox {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all;
    font-size: 14px;
    width: fit-content;
    position: absolute;
    left: 27.5%;
    top: -10px;
  }
  .messageContainer{
    position: relative;

  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.buttonSubmit{
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}

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
