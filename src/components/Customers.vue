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

          <router-link to="/products" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.product" class="icons" />
            <p>Products</p>
          </router-link>

          <router-link to="/customers" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Customers</p>
          </router-link>

        </div>
        <div class="dashboard" v-if="url != 'add' && id==null">
          <div class="wrapper1">
          <h2>Customers</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="Search for customers">
          </div>
          <router-link to="/customers/add" @click="clear()" >
            <div class="add">
              <font-awesome-icon :icon="icons.plus" class="icons" @click="clear()" />
              <p>ADD</p>
            </div>
          </router-link>
        </div>
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <!-- <th>P_ID</th> -->
                <th>Name</th>
                <th>Email</th>
                <th>Phone_N</th>
                <!-- <th>Color</th>
                <th>Size</th> -->
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(customer, index) in customers" :key="customer.id">
               
                <!-- <tr v-for="pinfo in product.pinfo" :key="pinfo.id" > -->
                  <td>{{ index + 1 }}</td>
                  <!-- <td>{{ product.id }}</td> -->
                  <td>{{ customer.first_name + ' ' + customer.last_name }}</td>
                  <td>{{ customer.email }}</td>
                  <td class="ellipsis" style="max-width: 200px;">{{ customer.phone ? customer.phone : 'N/A' }}</td>
                  <td class="ellipsis" style="max-width: 100px;"> {{ customer.address ? customer.address : 'N/A' }}</td>
                  <td class="action">
                    <router-link :to="'/customers/' + customer.id">
                      <font-awesome-icon :icon="icons.edit" class="icon action-icon"/>
                    </router-link>
                    <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteCustomer(customer.id)" />
                  </td>
                <!-- </tr> -->
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div class="dashboard">
          <form class="formContainer" v-if="url=='add'" enctype="multipart/form-data" @submit.prevent="createCustomer()">
            <div class="formHeader">
              <h2>Add Customer</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
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
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="email" placeholder="Email">
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <input type="text" v-model="phone" placeholder="Phone Number">
                </div>
              </div>
            </div>
            <div class="formHeader">
              <!-- <div class="left"> -->
                <div class="formBox">
                  <input type="text" v-model="address" placeholder="Address">
                </div>
              <!-- </div> -->
            </div>
            <div class="formButtons">
              <input class="submit" type="submit" value="Create">
              <router-link :to="'/customers'">
                <button class="cancel" @click="cancelForm">Cancel</button>
              </router-link>
            </div>
          </form>
          <form class="formContainer" v-if="id!=null" enctype="multipart/form-data" @submit.prevent="updateCustomer(id)">
            <div class="formHeader">
              <h2>Update Customer</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
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
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="email" placeholder="Email">
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <input type="text" v-model="phone" placeholder="Phone Number">
                </div>
              </div>
            </div>
            <div class="formHeader">
              <!-- <div class="left"> -->
                <div class="formBox">
                  <input type="text" v-model="address" placeholder="Address">
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
    import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
    import axios from 'axios';

    export default {
      name: "CustomersPage",
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
          message: "",
          status: false,
          messageStatus: false,
          customers: {},
          customer: {},
          url: "",
          first_name: "",
          last_name: "",
          email: "",
          address: "",
          phone: "",
        };
      },
      props:[
        'id',
      ],
      methods: {
        getCustomer(){
          axios.get('/customers').then((res)=>{
            console.log(res);
            this.customers = res.data.customers;
          }).then((err)=>{
            console.log(err);
          })
        },
        getCustomerById(){
          if(this.id!=null){
            axios.get('/customer/' + this.id).then((res)=>{
              console.log(res);
              this.customer = res.data.customer;
              this.first_name = this.customer.first_name;
              this.last_name = this.customer.last_name;
              this.email = this.customer.email;
              this.phone = this.customer.phone;
              this.address = this.customer.address;
            }).then((err)=>{
              console.log(err);
            })
          }
        },
        createCustomer(){
          axios.post('/customer',{
            'first_name': this.first_name,
            'last_name': this.last_name,
            'email': this.email,
            'phone': this.phone,
            'address': this.address
          }).then((res)=>{
            console.log(res.data);
            this.message = res.data.message;
            this.messageStatus = res.data.status;
            this.status = true;
            this.getCustomer();
            setTimeout(() => {
              this.status = false;
            }, 2000);
          }).catch((err)=>{
            console.log(err);
          })
        },
        clear(){
          this.first_name = "";
          this.last_name= "";
          this.email= "";
          this.address= "";
          this.phone= "";
        },
        updateCustomer(id){
          axios.post('/customer/update/' + id,{
            'first_name': this.first_name,
            'last_name': this.last_name,
            'email': this.email,
            'phone': this.phone,
            'address': this.address
          }).then((res)=>{
            console.log(res.data);
            this.message = res.data.message;
            this.messageStatus = res.data.status;
            this.status = true;
            this.getCustomer();
            setTimeout(() => {
              this.status = false;
            }, 2000);
          }).catch((err)=>{
            console.log(err);
          })
        },
        deleteCustomer(id){
          axios.delete('/customer/' + id).then((res)=>{
            console.log(res.data);
            this.getCustomer();
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      mounted() {
        this.getCustomer();
        this.getCustomerById();
        this.url = this.$route.path.split('/').pop();
      },
      watch:{
      '$route.path'(path){
        this.getCustomerById();
        this.url = path.split('/').pop();
      }
    }
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
