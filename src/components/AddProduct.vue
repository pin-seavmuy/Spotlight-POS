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
  
        <div class="dashboard  dashboardb">
          <form v-if="id==null && pid==null" enctype="multipart/form-data" @submit.prevent="createProduct()">
            <div class="formHeader">
              <h2>Add Product</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
              <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
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
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
            </div>
  
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <select v-model="category" class="selectBox">
                    <option value="" disabled selected>Select category</option>
                    <option :value="c.name" v-for="c in categories" >{{ c.name }}</option>
                    <!-- <option value="hoodie">Hoodie</option>
                    <option value="t-shirt">T-Shirt</option> -->
                  </select>
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <select v-model="size" class="selectBox">
                    <option value="" disabled selected>Select size</option>
                    <!-- <option value="free">Free</option> -->
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
              <div class="right">
                <div class="formBox">
                  <input type="number" v-model="qyt" placeholder="Quantity">
                </div>
              </div>
            </div>
            <br />
            <div class="formButtons">
              <input class="submit" type="submit" value="Create Product">
              <router-link to="/products">
                <button class="cancel" @click="cancelForm">Cancel</button>
              </router-link>
            </div>
          </form>
          <form v-if="(id!=null && pid==null) && url!='add'" enctype="multipart/form-data" @submit.prevent="updateProduct(this.id)">
            <div class="formHeader">
              <h2>Update Product</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
              <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
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
                <!-- <div class="formBox">
                  <select v-model="color" class="selectBox">
                    <option value="" disabled selected>Select color</option>
                    <option value="N/A">N/A</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div> -->
              </div>
            </div>
  
            <div class="formHeader">
              <div class="left">
                <!-- <div class="formBox">
                  <select v-model="category" class="selectBox">
                    <option value="" disabled selected>Select category</option>
                    <option value="dress">Dress</option>
                    <option value="hoodie">Hoodie</option>
                    <option value="t-shirt">T-Shirt</option>
                  </select>
                </div> -->
              </div>
              <div class="right">
                <!-- <div class="formBox">
                  <select v-model="size" class="selectBox">
                    <option value="" disabled selected>Select size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div> -->
              </div>
            </div>
  
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <input type="text" v-model="price" placeholder="Price">
                </div>
              </div>
              <div class="right">
                <!-- <div class="formBox">
                  <input type="number" v-model="qyt" placeholder="Quantity">
                </div> -->
              </div>
            </div>
            <br />
            <div class="formButtons">
              <input class="submit" type="submit" value="Create Product">
              <router-link to="/products">
                <button class="cancel" @click="cancelForm">Cancel</button>
              </router-link>
            </div>
          </form>
          <div v-if="(id!=null && pid==null) && url!='add'" class="dashboard">
            <div class="wrapper1">
              <h2>Products</h2>
              <div class="searchBox">
                <font-awesome-icon :icon="icons.search" class="icons" />
                <input type="text" placeholder="search clothes, orders, and more....">
              </div>
              <router-link :to="'/add-product/' + id + '/add'">
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
                    <!-- <th>P_ID</th> -->
                    <!-- <th>Image</th> -->
                    <!-- <th>Product</th> -->
                    <!-- <th>Category</th> -->
                    <th>Color</th>
                    <th>Size</th>
                    <!-- <th>price/Unit</th> -->
                    <!-- <th>Stocking</th> -->
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(p, index) in product.pinformations" :key="p.id">
                  
                    <!-- <tr v-for="pinfo in product.pinfo" :key="pinfo.id" > -->
                      <td>{{ index + 1 }}</td>
                      <!-- <td>{{ product.id }}</td> -->
                      <!-- <td>
                        <img :src="require(`../assets/img/1.webp`)" alt="Product Image" width="50" height="60" />
                      </td> -->
                      <!-- <td>{{ product.name }}</td> -->
                      <!-- <td>{{ sumCategories(product.categories) }}</td> -->
                      <td class="ellipsis" style="max-width: 200px;">{{ p.color }}</td>
                      <td class="ellipsis" style="max-width: 100px;"> {{ p.size }}</td>
                      <td>{{ p.quantity }}</td>
                      <td class="action">
                        <router-link :to="'/add-product/' + product.id + '/' + p.id">
                          <font-awesome-icon :icon="icons.edit" class="icon action-icon" @click="" />
                        </router-link>
                        <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteProductInfo(p.id)" />
                      </td>
                    <!-- </tr> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form class="formContainer" v-if="(id!=null && pid!=null)  && url!='add'" enctype="multipart/form-data" @submit.prevent="updateProductInfo(this.pid)">
            <div class="formHeader">
              <h2>Update Product Information</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
              <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            </div>
            <br />
            <br />
            <!-- <div class="formHeader">
              <label for="file-upload" class="custom-file-upload">
                <font-awesome-icon :icon="icons.upload" />
                <span>Upload Image</span>
              </label>
              <input id="file-upload" type="file" @change="handleFileUpload">
            </div> -->
            <br/>
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <select v-model="color" class="selectBox">
                    <option value="" disabled selected>Select color</option>
                    <option value="N/A">N/A</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <select v-model="size" class="selectBox">
                    <option value="" disabled selected>Select size</option>
                    <!-- <option value="free">Free</option> -->
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
              </div>
            </div>
  
  
            <div class="formHeader">
              <div class="left">
                <!-- <div class="formBox">
                  <input type="text" v-model="price" placeholder="Price">
                </div> -->
                <div class="formBox">
                  <input type="number" v-model="productInfo.quantity" placeholder="Quantity">
                </div>
              </div>
              <div class="right">
                
              </div>
            </div>
            <br />
            <div class="formButtons">
              <input class="submit" type="submit" value="Update Product">
              <router-link :to="'/add-product/' + id">
                <button class="cancel" @click="cancelForm">Cancel</button>
              </router-link>
            </div>
          </form>
          <form class="formContainer" v-if="(id!=null && pid==null)  && url=='add'" enctype="multipart/form-data" @submit.prevent="createProductInfo(this.id)">
            <div class="formHeader">
              <h2>Add Product Information</h2>
              <font-awesome-icon :icon="icons.edit" class="icons" />
            </div>
            <div v-if="status" class="messageContainer">
              <div v-if="messageStatus == 'true'" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
              <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            </div>
            <br />
            <br />
            <!-- <div class="formHeader">
              <label for="file-upload" class="custom-file-upload">
                <font-awesome-icon :icon="icons.upload" />
                <span>Upload Image</span>
              </label>
              <input id="file-upload" type="file" @change="handleFileUpload">
            </div> -->
            <br/>
            <div class="formHeader">
              <div class="left">
                <div class="formBox">
                  <select v-model="color" class="selectBox">
                    <option value="" disabled selected>Select color</option>
                    <option value="N/A">N/A</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
              <div class="right">
                <div class="formBox">
                  <select v-model="size" class="selectBox">
                    <option value="" disabled selected>Select size</option>
                    <!-- <option value="free">Free</option> -->
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
              </div>
            </div>
  
  
            <div class="formHeader">
              <div class="left">
                <!-- <div class="formBox">
                  <input type="text" v-model="price" placeholder="Price">
                </div> -->
                <div class="formBox">
                  <input type="number" v-model="productInfo.quantity" placeholder="Quantity">
                </div>
              </div>
              <div class="right">
                
              </div>
            </div>
            <br />
            <div class="formButtons">
              <input class="submit" type="submit" value="Create Product">
              <router-link :to="'/add-product/' + id">
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
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';
  import axios from 'axios';
  
  export default {
    name: "AddProduct",
    components: {
      FontAwesomeIcon,
    },
    props:[
      'id',
      'pid'
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
          trash: faTrash,
          upload: faUpload,
        },
        categories: {},
        productName: '',
        category: '',
        color: '',
        size: '',
        price: '',
        imageFile: null,
        status: false,
        messageStatus: false,
        message: "",
        product: {},
        productInfo: {},
        url: "",
        qyt: 0,
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
        this.qyt = 0;
        this.imageFile = null;
      },
      getCategory(){
        axios.get('/categories').then((res)=>{
          // console.log(res.data);
          this.categories = res.data.categories;
        }).catch((err)=>{
          console.log(err);
        })
      },
      createProduct(){
        const formData = new FormData();

        formData.append('image', this.imageFile);
        formData.append('category_name', this.category);
        formData.append('size', this.size);
        formData.append('color', this.color);
        formData.append('name', this.productName);
        formData.append('barcode', Math.floor(Math.random() * 900000) + 100000);
        formData.append('price', this.price);
        formData.append('qyt', this.qyt);
        formData.append('status', 1);

        axios.post('/product',
        // {
        //   'category_name': this.category,
        //   'name': this.productName,
        //   'image': this.imageFile,
        //   'barcode': 
        //   'price': this.price,
        //   'status': true,}
          formData
        ).then((res)=>{
          // console.log(res.data);
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
      createProductInfo(id){

        axios.post('/productinfo/' + id,
        {
          'size': this.size,
          'color': this.color,
          'quantity': this.qyt,}
        ).then((res)=>{
          console.log(res.data);
          this.message = res.data.message;
          this.messageStatus = res.data.status;
          this.status = true;
          this.getProduct();
          setTimeout(() => {
            this.status = false;
          }, 2000);
        }).catch((err)=>{
          console.log(err);
        })
      },
      updateProduct(id){
        const formData = new FormData();

        formData.append('image', this.imageFile);
        formData.append('category_name', this.category);
        formData.append('size', this.size);
        formData.append('color', this.color);
        formData.append('name', this.productName);
        formData.append('barcode', Math.floor(Math.random() * 900000) + 100000);
        formData.append('price', this.price);
        formData.append('qyt', this.qyt);
        formData.append('status', 1);

        axios.post('/product/' + id,
        // {
        //   'category_name': this.category,
        //   'name': this.productName,
        //   'image': this.imageFile,
        //   'barcode': 
        //   'price': this.price,
        //   'status': true,}
          formData
        ).then((res)=>{
          // console.log(res.data);
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
      getProduct(){
        if(this.id){
          axios.get('/product/' + this.id).then((res)=>{
            console.log(res.data);
            this.product = res.data.product;
            this.productName = this.product.name;
            this.price = this.product.price;
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      getProductInfo(){
        if(this.pid){
          axios.get('/productinfo/' + this.pid ).then((res)=>{
            // console.log(res.data);
            this.productInfo = res.data.product;
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      deleteProductInfo(id){
        axios.delete('/productinfo/' + id).then((res)=>{
          console.log(res.data);
          this.getProduct();
        }).catch((err)=>{
          console.log(err);
        })
      },
      updateProductInfo(id){
        axios.post('/productinfo/update/' + id,{
          'size': this.size,
          'color': this.color,
          'quantity': this.productInfo.quantity
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
      this.getCategory();
      this.getProduct();
      this.getProductInfo();
    },
    watch:{
      '$route.path'(path){
        this.url = path.split('/').pop();
      }
    }
  };
  </script>
  
  <style scoped>
  @import '../assets/css/category.css';
  .messageContainer{
    position: absolute;
    /* background-color: black; */
    display: flex; 
    justify-content: center;
    width: 93%;
    top: 80px;
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
