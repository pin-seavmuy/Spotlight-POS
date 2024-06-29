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
  
          <router-link to="/products" class="wrapper">
            <font-awesome-icon :icon="icons.product" class="icons" />
            <p>Products</p>
          </router-link>
  
          <router-link to="/customers" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>Customers</p>
          </router-link>
        </div>
  
        <div class="dashboard">
          <form @submit.prevent="submitForm">
            <div class="formHeader">
              <h2>Add Product</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <br />
            <div class="formHeader">
              <label for="file-upload" class="custom-file-upload">
                <font-awesome-icon :icon="icons.upload" />
                <span>Upload Image</span>
              </label>
              <input id="file-upload" type="file" @change="handleFileUpload">
            </div>
            <br/>
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="productName" placeholder="Product name">
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <select v-model="color" class="selectBox">
                    <option value="" disabled selected>Select color</option>
                    <option value="n/a">N/A</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>
              </div>
            </div>
  
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <select v-model="category" class="selectBox">
                    <option value="" disabled selected>Select category</option>
                    <option value="dress">Dress</option>
                    <option value="hoodie">Hoodie</option>
                    <option value="t-shirt">T-Shirt</option>
                  </select>
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <select v-model="size" class="selectBox">
                    <option value="" disabled selected>Select size</option>
                    <option value="free">Free</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
              </div>
            </div>
  
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="price" placeholder="Price">
                </div>
              </div>
              <div class="right"></div>
            </div>
  
            <br />
            <div class="formButtons">
              <input class="submit" type="submit" value="Create Product">
              <button class="cancel" @click="cancelForm">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';
  
  export default {
    name: "AddProduct",
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
          upload: faUpload,
        },
        productName: '',
        category: '',
        color: '',
        size: '',
        price: '',
        imageFile: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.imageFile = event.target.files[0];
      },
      submitForm() {
        // Form submission logic here
        console.log("Form submitted with the following data:");
        console.log(`Product Name: ${this.productName}`);
        console.log(`Category: ${this.category}`);
        console.log(`Color: ${this.color}`);
        console.log(`Size: ${this.size}`);
        console.log(`Price: ${this.price}`);
        console.log(`Image File: ${this.imageFile ? this.imageFile.name : 'No image uploaded'}`);
      },
      cancelForm() {
        // Clear form fields
        this.productName = '';
        this.category = '';
        this.color = '';
        this.size = '';
        this.price = '';
        this.imageFile = null;
      },
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/css/category.css';
  
  form {
    width: 600px;
    background-color: #97b0937f;
    padding: 20px;
    border-radius: 10px;
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
  
  /* Placeholder styles for select elements */
  .formBox select option[disabled][selected] {
    color: gray;
  }
  </style>
