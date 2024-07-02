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

          <router-link to="/POS" class="wrapper" active-class="active">
            <font-awesome-icon :icon="icons.users" class="icons" />
            <p>POS</p>
          </router-link>

        </div>
        <div class="dashboard">
        <div class="wrapper1">
          <h2>Categories</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="search clothes, orders, and more....">
          </div>
          <router-link to="/add-category" >
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
                <th>Category</th>
                <th>P_ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(category, index) in categories" :key="category.id">
                <td>{{ index + 1 }}</td>
                <td>{{ category.name }}</td>
                <td class="ellipsis" style="max-width: 100px;" >{{ productID[index] }}</td>
                <td class="action">
                  <router-link style="text-decoration: none; color: black" :to="'/add-category/' + category.id">
                    <font-awesome-icon :icon="icons.edit" class="icon action-icon"/>
                  </router-link>
                  <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteCategory(category.id)" />
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
    import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers,faSearch, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

    export default {
      name: "CategoryPage",
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
              plus: faPlus,
              search: faSearch,
              edit: faEdit,
              trash: faTrash,
              // Add more icons as needed
          },
          orders: [
            { id: 1, productID: 'C0001', category: "Dress" },
            { id: 2,  productID: 'C0002', category: "Hoodie" },
            { id: 3, productID: 'C0003', category: "T-shirt"  },
          ],
          categories: {},
          productID: {},
        };
      },
      methods: {
        getCategories(){
          axios.get('/categories/product').then((res)=>{
            this.categories = res.data.products;
            this.productID = res.data.productId;
            console.log(this.categories);
            console.log(this.productID);
          }).catch((err)=>{
            console.log(err);
          })
        },
        deleteCategory(id){
          axios.delete('/category/'+id).then((res)=>{
            console.log(res.data);
            this.getCategories();
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      mounted() {
        this.getCategories();
      },
    };

  </script>
  
  <style scoped>
  @import '../assets/css/category.css';

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
  .ellipsis {
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
      border: 1px solid #ccc;
      padding: 5px;
    }
  </style>
  