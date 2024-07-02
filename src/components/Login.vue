<template>
    <form class="get-started" id="login-screen" @submit.prevent="login">
        <p>
            <!-- <span class="material-icons" id="login-logo">
                maps_ugc
            </span> -->
            <div>
                POS <span class="login-p-subtitle" style="margin-left: 10px;">System</span>
            </div>
            <div v-if="status" class="messageContainer">
                <div v-if="messageStatus" style="background-color: green; color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
                <div v-else style="background-color: red;color: white; font-weight: bold;" class="messageBox">{{ message }}</div>
            </div>
        </p>
        <input style="margin-top: 25px;"  type="text" v-model="email" name="email" id="email" placeholder="Email" class="login-form">
        <input type="password" v-model="password" name="password" id="password" class="login-form" placeholder="Password">
        <button type="submit"  class="login-btn">Login</button>
    </form>
</template>

<script>
import axios from 'axios';

    export default{
        data() {
            return {
                email: '',
                password: '',
                status: false,
                messageStatus: false,
                message: "",
                user:{},
            }
        },
        methods: {
            login(){
                axios.post('/loginUser',{
                    'email': this.email,
                    'password': this.password,
                }).then((res)=>{
                    console.log(res.data);
                    this.message = res.data.message;
                    this.messageStatus = res.data.status;
                    this.status = true;

                    localStorage.setItem('token', res.data.token);
                    if(res.data.status){
                        this.getUser(res.data.token);
                        if(this.user.first_name=='admin'){
                            this.$router.push({path: 'dashboard'});
                        }else{
                            this.$router.push({path: 'POS'});

                        }
                    }

                    if(!res.data.status){
                        setTimeout(() => {
                            this.status = false;
                        }, 1500);
                    }
                }).catch((err)=>{
                    console.log(err);
                });
            },
            getUser(token){
                axios.get('/user',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then((res)=>{
                    this.user =  res.data;
                    console.log(this.user);
                }).catch((err)=>{});
            }
        },
        mounted() {
            
        },
    }
</script>


<style scoped>

    .get-started{
        display: flex;
        flex-direction: column;
        margin: 20vh auto;
        width: 500px;
        padding: 30px;
        align-items: center;
        justify-content: center;
        background-color: white;
        border: 1px solid black;
        background-color: gainsboro;
        border-radius: 10px;
    }
    .get-started p{
        position: relative;
        font-size: 30pt;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #2f3542;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .login-p-subtitle{
    color: #5352ed;
    }

    #login-logo{
        color: #5352ed;
        font-size: 30pt;
    }

    .login-form{
        margin: 8px 0;
        padding: 16px 12px;
        width: 350px;
        outline-style: none;
        border: none;
        font-family: 'Raleway';
        font-size: 12pt;
        font-weight: 500;
        border: none;
        border: solid 4px rgb(235, 235, 235);
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
        /* top: -40px; */
        /* left: 0; */
    }

    .login-btn{
        width: 350px;
        outline-style: none;
        border: none;
        background-color: #5352ed;
        font-size: 'Raleway';
        font-weight: 700;
        color: white;
        font-size:18pt;
        padding: 16px 0px;
        margin-top: 30px;
        margin: 30px 0;
        cursor: pointer;
    }

    .login-form:focus{
    border: solid 4px black;
    transition: .2s;
    }

    .login-btn:active{
    outline-style: none;
    border: none;
    }

    .messageContainer{
        position: absolute;
        /* background-color: black; */
        display: flex; 
        justify-content: center;
        width: 93%;
        top: 65px;
    }
</style>