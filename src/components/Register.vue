<template>
  <section class="flex flex-col justify-center items-center md:flex-row h-screen  fixed w-full left-0 top-0 bottom-0 right-0 bg-gray-100">


      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-aut md:w-1/2 xl:w-1/3 h-fit px-6 py-6 lg:px-16 xl:px-12
            flex items-center justify-center rounded-lg shadow-xl">

        <div class="w-full h-100">
          <img src="../assets/Logo2.png"  class="h-20 mx-auto" alt="">
          <h1 class="text-xl md:text-xl font-bold leading-tight mt-6">Register your account</h1>

          <form class="mt-6">
            <div>
              <input v-model="firstName" type="text" placeholder="First name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input v-model="lastName" type="text" placeholder="Last name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input v-model="userName" type="text" placeholder="user name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div class="mt-4">
              <input v-model="password" type="password" placeholder="*******" minlength="6" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required autofocus autocomplete>
            </div>
            <input type="button" @click="register()" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-6" value="Register">
          </form>

          <hr class="my-6 border-gray-300 w-full">


           <p class="mt-8">Have an account? <router-link to="/LoginPage" class="text-blue-500 hover:text-blue-700 font-semibold">Login</router-link></p>

        </div>
      </div>

    </section>
</template>


<script>
import axios from 'axios'
export default {
    name: 'RegisterPage',
    data(){
      return{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userName: ''
      }
    },
    methods: {
      register(){
        const registerBody = {username: this.userName, password: this.password, email: this.email,  first_name: this.firstName, last_name: this.lastName }
        console.log('registerBody')
        console.log(registerBody)
        axios.post('https://mi-contactsapi.herokuapp.com/api/v1/auth/register', registerBody,
         {
              headers: {
              // Authorization:"Bearer "  + localStorage.getItem("token"),
              "Content-Type": " application/json",
              // "Accept": "application/json"
            }
          }
       )
        .then((response) => {
          if(response.status == 201 || response.status == 200){
            console.log(response.data)
            this.$router.push({ path: '/LoginPage'})
          }
          else{
            console.log(response.data)
            // this.error = "Registration Failed"
            return false
          }
        })
        .then((error) => console.log(error))

        }
    }

}
</script>

<style>

</style>