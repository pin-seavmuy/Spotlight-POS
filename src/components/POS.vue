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
        <div class="dashboard dashboardb">
          <div class="dashleft">
            <select v-model="customer_id"  class="selectBox">
                <option value="" disabled selected>Select Customer</option>
                <option v-for="customer in customers" :value="customer.id">{{ customer.first_name + ' ' + customer.last_name }}</option>
              </select>
              <div v-if="customer_id" class="dashtable">
                <table >
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="orders" v-for="order in orders">
                      <td>{{ order.product.name }}</td>
                      <td>
                        <input class="inputNumber" type="number" :value="order.quantity" @change="(event) => updateUserQuantity(customer_id, order.product_id, order.pinfo_id, event.target.value)">
                        <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteCart(order.id)" />
                      </td>
                      <td>${{ order.total }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-if="total" class="totalprice">
                <span class="total">Total: </span>
                <p class="total1">${{ total.toFixed(2) }}</p>
              </div>
              <div class="buttonContainer" v-if="customer_id">
                <!-- <button class="button1">Cancel</button> -->
                 <div></div>
                <button class="button2" v-if="customer_id" @click="checkOutCustomer(customer_id)">Add To Cart</button>
              </div>
          </div>
          <div class="dashright">
            <div @click="addToCart(customer_id,product.product_id,product.id,1)"v-for="product in products" class="productCon">
              <img :src="`http://localhost:9000/image/`+ product.product.image" alt="">
              <p>{{product.product.name}}({{ product.color }}/{{ product.size }})</p>
            </div>
            
          </div>
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
          products: {},
          orders: {},
          url: "",
          customer_id: "",
          total: 0,
          user: {},
          showDropdown: false
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
        getProduct(){
          axios.get('/productinfo').then((res)=>{
            this.products = res.data.products;
            console.log(this.products);
          }).catch((err)=>{
            console.log(err);
          });
        },
        addToCart(user_id, product_id,pinfo_id,quantity = 1){
          axios.post('/cart/'+ user_id,{
            'product_id': product_id,
            'pinfo_id': pinfo_id,
            'quantity': quantity
          }).then((res)=>{
            console.log(res.data);
            this.getOrder(this.customer_id);
          }).catch((err)=>{
            console.log(err);
          })
        },
        toggleDropdown() {
          this.showDropdown = !this.showDropdown;
        },
        logout() {
          localStorage.removeItem('token');
          this.$router.push('/login');
        },
        getOrder(id){
          axios.get('/orders/' + id).then((res)=>{
            this.total = 0;
            console.log(res.data);
            this.orders = res.data.order;
            this.orders.forEach((order)=>{
            this.total += order.total;
            });
            console.log(this.orders);
            }).catch((err)=>{
              this.orders = {};
              console.log(err);
            })
          },
          checkOutCustomer(id){
            axios.get('/cart/checkout/'+ id).then((res)=>{
              console.log(res.data);
              this.getOrder(this.customer_id);
            }).catch((err)=>{
              console.log(err);
            });
          },
          updateUserQuantity(user_id, product_id,pinfo_id,quantity) {
            axios.post('/orders/quantity/' + user_id,{
              'product_id': product_id,
              'pinfo_id': pinfo_id,
              'quantity': quantity
            }).then((res)=>{
              console.log(res.data);
              this.getOrder(this.customer_id);
            }).catch((err)=>{
              console.log(err);
            })
          },
          deleteCart(id){
            axios.delete('/cart/delete/' + id).then((res)=>{
              console.log(res.data);
              this.getOrder(this.customer_id);
            }).catch((err)=>{
              console.log(err);
            });
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
        this.getCustomer();
        this.getProduct();
        this.getUser();
        this.url = this.$route.path.split('/').pop();
      },
      watch:{
      '$route.path'(path){
        this.getCustomerById();
        this.url = path.split('/').pop();
      },
      customer_id(newValue, oldValue) {
        this.customer_id = newValue;
        this.getOrder(this.customer_id);
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

  .selectBox{
    padding: 0 20px 0 0;
    min-width: 300px;
  }

  .dashleft{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .buttonContainer{
    display: flex;
    justify-content: space-between;
    min-width: 300px;
  }

  .inputNumber{
    width: 75%;
    margin-right: 10px;
  }

  .buttonContainer button{
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding: 5px 10px;
  }

  .buttonContainer .button1{
    background-color: red;
    border-radius: 10px;
  }
  .buttonContainer .button2{
    background-color: green;
    border-radius: 10px;
    cursor: pointer;
  }

  .totalprice{
    display: flex;
    justify-content: space-between;
  }

  .total{
    font-size: 18px;
    font-weight: bold;
    width: fit-content;
  }

  .total1{
    font-size: 18px;
    font-weight: bold;
    color: green;
  }

  .dashboardb{
    display: flex;
    flex-direction: row;
     gap: 10px;
  }

  .productCon{
    cursor: pointer;
    width: 280px; 
    height: 220px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 1px solid black;
  }

  .productCon p{
    margin-top: 10px;
    width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    font-size: 12px;
  }

  .productCon img{
    width: auto;
    height: 120px;
  }

  .dashright{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex-grow: 1;
    /* border: 1px solid red; */
    padding: 30px 10px;
  }

  .dashtable{
    height: 500px;
    overflow: hidden;
    min-width: 300px;
    overflow-y: scroll;
    /* background-color: black; */
  }

  .dashtable::-webkit-scrollbar{
    width: 0px;
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
  /* Placeholder styles for select elements */
  .formBox select option[disabled][selected] {
    color: gray;
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
