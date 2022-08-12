<template>
  <section class="flex flex-col justify-center items-center md:flex-row h-screen  fixed w-full left-0 top-0 bottom-0 right-0 bg-gray-100">


      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-aut md:w-1/2 xl:w-1/3 h-fit px-6 py-6 lg:px-16 xl:px-12
            flex items-center justify-center rounded-lg shadow-xl">

        <div class="w-full h-100">
          <P class="text-red-500">{{error}}</P>
          <img src="../assets/Logo2.png"  class="h-20 mx-auto" alt="">
          <h1 class="text-xl md:text-xl font-bold leading-tight mt-6">Log in to your account</h1>

          <form class="mt-6">
            <div>
              <input v-model="userName" type="text" placeholder="Username/email" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete="none" required>
            </div>

            <div class="mt-4">
              <input v-model="password" type="password" placeholder="*******" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 
                    focus:bg-white focus:outline-none" required autocomplete="none">
            </div>
            <input type="button" @click="login()" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-6" value="Log In">
          </form>

          <hr class="my-6 border-gray-300 w-full">


           <p class="mt-8">Need an account? <router-link to="/RegisterPage" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
                  account</router-link></p>

        </div>
      </div>

    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data(){
      return {
        userName: '',
        password: '',
        error: '',
      }
    },
    methods: {
      login(){
        const loginBody ={username: this.userName, password: this.password}
        
        if(this.userName == "" || this.password == ""){
          this.error = "All field are neede"
          // this.$router.push({ path: '/' });
          return false
        } 
        else{ 
          axios.post("https://mi-contactsapi.herokuapp.com/api/v1/auth/login", loginBody,
          {
              headers: {
              // Authorization:"Bearer "  + localStorage.getItem("token"),
              "Content-Type": " application/json",
              // "Accept": "application/json"
            }
          })
        
          .then((response) => {
            if(response.status == 200 || response.status == 201){
              localStorage.setItem("token", response.data.token);
              console.log(response.status)
              this.$router.push({ path: '/' });
              // return false;
              
            }
             else if (response.status == 422){
              
              this.error = "Wrong username or password";
              return false;
              
            } 
            else if (response.status >= 423 && response.status <= 499){
              this.error = "Wrong username or password";
              return false;
            } 
            else if (response.status >= 500){
              this.error = "There was a problen on server";
              return false;
            } 
            else {
              this.error = "Login Failed";
              return false;
            }
          })
          .catch((err) => console.log(err.response))
        }
        


      },
    }

}
</script>

<style>

</style>