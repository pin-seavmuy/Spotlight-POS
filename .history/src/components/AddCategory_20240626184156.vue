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
        <form>
          <div class="formBox">
            <h2>Create Category</h2>
            <font-awesome-icon :icon="icons.edit" class="icons" />
          </div>
          <br/><br/>
          <div class="formBox">
            <label>Category</label>
            <input type="text" placeholder="Category">
          </div>
          <br/>
          <input class="submit" type="submit" value="Create">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faBell, faShoppingBasket, faThLarge, faDatabase, faListAlt, faCreditCard, faBoxOpen, faUsers, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';

  export default {
    name: "AddCategory",
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
        },
      };
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
    margin: 10px 0 0 200px;
  }
</style>
