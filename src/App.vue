<template>
  <header class="text-gray-700 body-font border-b border-gray-200">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <router-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
          <img src="./assets/Logo2.png" class="h-12">
        </router-link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <router-link to="/">Home</router-link> |
          <!-- <router-link to="/about">About</router-link> |
          <router-link to="/ContactList">Contacts</router-link> |
          <router-link to="/VuewContact">contact</router-link> |
          <router-link to="/LoginPage">Login</router-link> |
          <router-link to="/RegisterPage">Register</router-link> |-->
          <router-link to="/CreateContact">Create Contact</router-link> 
          <button @click="logout()">
            logout
          </button>
        </nav>
      </div>
    </header>

  
  <router-view/>
</template>

<script>
// import axios from 'axios'
export default {
  methods:{
    logout(){
      this.$router.push({ path: '/loginPage' });
      return localStorage.clear();
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding-right: 30px;
  padding-left: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 10px;
  padding-right: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
