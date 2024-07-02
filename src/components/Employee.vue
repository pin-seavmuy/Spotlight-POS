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
          <h2>Employee</h2>
          <div class="searchBox">
            <font-awesome-icon :icon="icons.search" class="icons" />
            <input type="text" placeholder="search clothes, orders, and more....">
          </div>
          <router-link to="/add-employee" >
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
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(employee, index) in employees" :key="employee.id">
                <td>{{ index + 1 }}</td>
                <td>{{ employee.first_name + ' ' + employee.last_name}}</td>
                <td class="ellipsis" style="max-width: 100px;" >{{ employee.email }}</td>
                <td class="action">
                  <router-link style="text-decoration: none; color: black" :to="'/add-employee/' + employee.id">
                    <font-awesome-icon :icon="icons.edit" class="icon action-icon"/>
                  </router-link>
                  <font-awesome-icon :icon="icons.trash" class="icon action-icon" @click="deleteEmployee(employee.id)" />
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
    import { reactive } from 'vue';
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
          showDropdown: false,
          employees: {},
          filterEmployees: [],
          productID: {},
          user:{},
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
        getEmployee(){
          axios.get('/employees').then((res)=>{
            this.employees = res.data.users;
            // this.filteredUsers(this.employees);
            console.log(this.employees);
          }).catch((err)=>{
            console.log(err);
          })
        },
        deleteEmployee(id){
          axios.delete('/employee/'+id).then((res)=>{
            console.log(res.data);
            this.getEmployee();
          }).catch((err)=>{
            console.log(err);
          })
        },
        filteredUsers(employees){
          employees.forEach(user => {
            if(user.first_name != 'admin'){
              this.filterEmployees.push(user);
            }
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
        this.getEmployee();
        this.getUser();
      },

      // computed:{
      //   filteredUsers() {
      //     return this.employees.filter(user => user.first_name != 'admin');
      //   }
      // }
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
    padding: 15px; 
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
  