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

      <div class="dashboard">
        <div class="wrapper1">
          <h2>Products</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="search clothes, orders, and more....">
          </div>
          <router-link to="/add-product">
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
                <!-- <th>No</th> -->
                <th>P_ID</th>
                <th>Image</th>
                <th>Product</th>
                <th>Category</th>
                <th>Color</th>
                <th>Size</th>
                <th>price/Unit</th>
                <th>Stocking</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="product.id">
               
                <!-- <tr v-for="pinfo in product.pinfo" :key="pinfo.id" > -->
                  <!-- <td>{{ index + 1 }}</td> -->
                  <td>{{ product.id }}</td>
                  <td>
                    <img :src="require(`../assets/img/1.webp`)" alt="Product Image" width="50" height="60" />
                  </td>
                  <td>{{ product.name }}</td>
                  <td>{{ sumCategories(product.categories) }}</td>
                  <td class="ellipsis" style="max-width: 200px;">{{ concatString(product.pinformations,"color") }}</td>
                  <td class="ellipsis" style="max-width: 100px;"> {{ concatString(product.pinformations) }}</td>
                  <td>{{ '$'+  product.price }}</td>
                  <td>
                  <select v-model="product.status" @change="changeProductStatus(product.id)">
                    <option value="1">In Stock</option>
                    <option value="0">Out of Stock</option>
                  </select>
                  </td>
                  <td>{{ sumupQuantity(product.pinformations) }}</td>
                  <td class="action">
                    <router-link :to="'/add-product/' + product.id">
                      <font-awesome-icon :icon="icons.edit" class="icon action-icon" @click="" />
                    </router-link>
                    <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteProduct(product.id)" />
                  </td>
                <!-- </tr> -->
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
import axios from 'axios';

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
          { id: 1, productID: 'C0001', image: '1.webp', product: 'Flower Dress',  category: "Dress", color: "N/A", size: "Free", price: "$15.00", stocking: 'inStock', qty: "10" },
          { id: 2, productID: 'C0002',  image: 'red.webp', product: 'Prada', category: "Hoodie",  color: "Gray", size: "M", price: "$25.00",stocking: 'outStock', qty: '20' },
          { id: 3, productID: 'C0003', image: 'rhude.webp', product: 'Beyoncé', category: "T-shirt",  color: "Black", size: "L", price: "$20.00", stocking: 'inStock', qty: '15' },
        ],
        products: {},
        $item: "",
        $quantity: 0,
        $categories: "",
      };
    },
    methods: {
      getProduct(){
        axios.get('/products').then((res)=>{
          this.products = res.data.products;
          console.log(this.products);
        }).catch((err)=>{
          console.log(err);
        })
      },
      changeProductStatus(id){
        axios.get('/product/status/' + id).then((res)=>{
          console.log(res.data);
        }).catch((err)=>{
          console.log(err);
        })
      },
      concatString(text,type = "size"){
        this.item = "";
        for(const item of text){
          if(type == "size"){
            if(this.item== "")
              this.item += item.size;
            else
              this.item += "/" + item.size
          }else{
            if(this.item== "")
              this.item += item.color;
            else
              this.item += "/" + item.color
          }
        }
        return this.item;
      },
      sumupQuantity(text){
        this.quantity = 0
        for(const item of text){
          this.quantity += item.quantity;
        }

        return this.quantity;
      },
      sumCategories(text){
        this.categories = "";
        for(const item of text){
          if(this.categories== "")
              this.categories += item.name;
            else
              this.categories += "/" + item.name;
        }
        return this.categories;
      },
      deleteProduct(id){
        axios.delete('/product/'+ id).then((res)=>{
          console.log(res.data);
          this.getProduct();
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    mounted() {
      this.getProduct();
    },
    watch:{
      '$route.path'(path){
        this.url = path.split('/').pop();
      }
    }
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
    padding: 35px;
    /* border-width: 0.1; */
  }

  .action-icon {
    cursor: pointer;
  }

  .ellipsis {
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
      border: 1px solid #ccc;
      padding: 5px;
    }
</style>
