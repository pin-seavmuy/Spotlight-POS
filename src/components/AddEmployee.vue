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
          <p>ASUS</p>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="side-bar">
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

        <router-link to="/customers" class="wrapper" active-class="active">
          <font-awesome-icon :icon="icons.users" class="icons" />
          <p>Customers</p>
        </router-link>

        <router-link to="/POS" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>POS</p>
          </router-link>
        <router-link to="/employee" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Employee</p>
          </router-link>
      </div>
      <div class="dashboard">
        <form v-if="id==null" class="formContainer" enctype="multipart/form-data" @submit.prevent="createUser()">
            <div class="formHeader">
              <h2>Add Employee</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
              <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            </div>
            <br/>
            <br/>
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="first_name" placeholder="First Name" required>
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <input type="text" v-model="last_name" placeholder="Last Name" required>
                </div>
              </div>
            </div>
  
  
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="email" placeholder="Email" required>
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <input type="text" v-model="password" placeholder="Password" required>
                </div>
              </div>
            </div>
            <div class="formButtons">
              <input class="submit" type="submit" value="Create">
              <router-link :to="'/employee'">
                <button class="cancel" @click="cancelForm">Cancel</button>
              </router-link>
            </div>
          </form>
          <form v-else class="formContainer" enctype="multipart/form-data" @submit.prevent="updateUser()">
            <div class="formHeader">
              <h2>Update Employee</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
              <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            </div>
            <br/>
            <br/>
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="first_name" placeholder="First Name">
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <input type="text" v-model="last_name" placeholder="Last Name">
                </div>
              </div>
            </div>
  
            <div class="formHeader">
              <!-- <div class="left"> -->
                <div class="formBox">
                  <input type="text" v-model="email" placeholder="Email">
                </div>
              <!-- </div> -->
            </div>
            <div class="formButtons">
              <input class="submit" type="submit" value="Update">
              <router-link :to="'/customers'">
                <button class="cancel" @click="cancelForm">Cancel</button>
              </router-link>
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
        last_name: "",
        first_name: "",
        email: "",
        password: "",
        message: "",
        status: false,
        messageStatus: false,
        employee: {}
      };
    },
    methods: {
      createUser(){
        axios.post('/createUser',{
          'first_name': this.first_name,
          'email': this.email,
          'last_name': this.last_name,
          'password': this.password,
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
      getUserById(){
        if(this.id!=null){
          axios.get('/employee/' + this.id).then((res)=>{
            this.employee = res.data.employee;
            console.log(this.employee)
            this.first_name = this.employee.first_name;
            this.last_name = this.employee.last_name;
            this.email = this.employee.email;
            console.log(this.employee);
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      updateUser(){
        axios.post('/employee/' + this.id,{
          'first_name': this.first_name,
          'email': this.email,
          'last_name': this.last_name,
        }).then((res)=>{
          console.log(res.data);

          this.message = res.data.message;
          this.messageStatus = res.data.status;
          this.status = true;

          setTimeout(() => {
            this.status = false;
          }, 2000);
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    mounted() {
      this.getUserById();
    },
  };
</script>

<style scoped>
  /* @import '../assets/css/style.css'; */
  .messageContainer{
    position: absolute;
    /* background-color: black; */
    display: flex; 
    justify-content: center;
    width: 93%;
    top: 55px;
  }
  .formContainer{
    height: fit-content;
  }
  form {
    width: 600px;
    background-color: #97b0937f;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }
  .action {
    display: flex;
    justify-content: space-evenly;
    gap: 0px;
    /* padding: 0; */
    /* border-width: 0.1; */
  }

  .action-icon {
    cursor: pointer;
  }
  .messageBox {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all;
    font-size: 13px;
    width: fit-content;
    /* position: absolute; */
    /* left: 30%; */
    /* top: 26px; */
  }
  .formHeader {
    display: flex;
    justify-content: space-between;
    align-items: end;
    
  }
  
  .formBox {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    
  }
  .left{
    padding: 1px;
    width:250px
  }
  .right{
    padding: 1px;
    width: 250px;
  }
  
  .formBox input,
  .formBox select {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
  }
  
  .formButtons {
    display: flex;
    justify-content: center;
    gap: 50px;
  }

  .ellipsis{
    text-overflow: ellipsis;
    overflow: hidden;
    line-clamp: 1;
  }
  
  .submit,
  .cancel {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;
  }
  
  .submit {
    background-color: #97b0937f;
  }
  .submit:hover {
    background-color: #89a485b6;
  }
  
  .cancel {
    background-color: #dd3c37;
    color: white;
  }
  .cancel:hover {
    background-color: #d42525;
  }
  
  .custom-file-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    padding: 6px 12px;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #f0f0f0;
  }
  
  .custom-file-upload span {
    margin-left: 10px;
  }
  
  .custom-file-upload input[type="file"] {
    display: none;
  }
  .dashboardb{
    display: flex;
    flex-direction: row;
  }
  /* Placeholder styles for select elements */
  .formBox select option[disabled][selected] {
    color: gray;
  }
</style>
