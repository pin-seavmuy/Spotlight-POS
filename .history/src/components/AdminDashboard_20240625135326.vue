<template>
    <div>
      <header class="header">
        <div class="logo">
          <a href="#">Spotlight</a>
        </div>
        <div class="header-icons">
          <i class="fas fa-bell"></i>
          <div class="account">
            <img src="../assets/img/people.png" alt="" />
            <p>ASUS</p>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="side-bar">
          <div class="wrapper active">
            <i class="fa fa-th-large"></i>
            <p>Dashboard</p>
          </div>
          <div class="wrapper">
            <i class="fa fa-shopping-basket"></i>
            <p>Orders</p>
          </div>
          <div class="wrapper">
            <i class="fa fa-database"></i>
            <p>Manage Products</p>
          </div>
          <div class="wrapper">
            <i class="fa fa-list-alt"></i>
            <p>Sold out</p>
          </div>
          <div class="wrapper">
            <i class="fa fa-users"></i>
            <p>Customers</p>
          </div>
        </div>
        <div class="dashboard">
          <h2>Admin Dashboard</h2>
          <div class="wrapper1">
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/products.png" />
                <p>Total Product</p>
              </div>
              <div class="qty">12000</div>
            </div>
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/list.png" />
                <p>Categories</p>
              </div>
              <div class="qty">43</div>
            </div>
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/mobile-banking.png" />
                <p>Transactions</p>
              </div>
              <div class="qty">669</div>
            </div>
          </div>
          <div class="wrapper1">
            <div class="box">
              <div class="wrapperBox">
                <img src="../assets/img/shopping-cart.png" />
                <p>Order Today</p>
              </div>
              <div class="qty">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminDashboard",
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  @import url("https://fonts.cdnfonts.com/css/mogra");
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,700");
  @import url("https://fonts.googleapis.com/css2?family=Montaga&display=swap");
  
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  body {
    background: rgb(255, 255, 255);
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 20px 40px 20px 20px;
    background: #97b093;
  }
  
  .logo a {
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    margin: 2rem 8rem 2rem 2rem;
    font-family: "Mogra", sans-serif;
    text-decoration: none;
  }
  
  .header-icons {
    display: flex;
    align-items: center;
  }
  
  .header-icons i {
    margin-right: 1rem;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    background-color: #97b093;
    padding: 8px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .header-icons .account {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .header-icons .account img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    margin-left: 10px;
    border: 1px solid gray;
  }
  
  .header-icons h5 {
    color: black;
    font-family: "Playfair Display", serif;
  }
  
  .container {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
  }
  
  .side-bar {
    width: 300px;
    height: 100%;
    padding: 30px 10px 10px 10px;
    border-right: 2px solid gray;
  }
  
  .wrapper {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 8px 15px;
    gap: 20px;
    color: black;
    font-family: "Playfair Display", serif;
    border-radius: 5px;
    margin: 0 0 20px 0;
    cursor: pointer;
  }
  
  .wrapper i {
    color: gray;
  }
  
  .wrapper:hover {
    background-color: #ecf1eb;
  }
  
  .wrapper.active {
    background-color: #c1d2be;
    border: 1px solid gray;
  }
  
  .dashboard {
    width: 100%;
    height: 100%;
    padding: 30px 40px 0px 40px;
  }
  
  .wrapper1 {
    padding: 2px;
    margin: 30px 0 0 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .box {
    width: 360px;
    height: 160px;
    background-color: #f7f4f4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    display: flex;
    padding: 20px 30px;
    align-items: center;
    gap: 40px;
  }
  
  .box:hover {
    background-color: #f7efef;
  }
  
  .box .wrapperBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  
  .box img {
    width: 70px;
    height: 70px;
  }
  
  .box .qty {
    border-left: 3px solid gray;
    padding: 10px 0 10px 30px;
    font-size: xx-large;
  }
  </style>
  