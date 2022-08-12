<template>
  <section class="flex flex-col justify-center items-center md:flex-row h-screen  bottom-0 right-0 bg-gray-100">


      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-aut md:w-1/2 xl:w-1/3 h-fit px-6 py-6 lg:px-16 xl:px-12
            flex items-center justify-center rounded-lg shadow-xl">

        <div class="w-full h-100">
         
          <h1 class="text-xl md:text-xl font-bold leading-tight mt-6">Create Contact</h1>
          <p class="text-red-500">{{error}}</p>
          <form class="mt-6" >
             <label class="flex flex-col w-full h-20 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 mb-6">
            <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                Select a photo</p>
                    <div class="flex flex-col items-center justify-center pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        
                </div>
                <input v-on:change="contactPicture" type="text" placeholder="Image link" class="w-full px-4  rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
            </label>
            <div>
              <input v-model="firstName" type="text" placeholder="First name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input v-model="lastName" type="text"  placeholder="Last name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input v-model="phoneNumber" type="phone" placeholder="Phone" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div class="mt-4">
              <input v-model="countryCode" type="text" placeholder="Country code" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required>
                
            </div>
            <label class="text-right pt-4 block">
              Your favourite?
              <input v-model="favourite" type="checkbox" class=" checked:bg-blue-500" />
            </label>
            <div class="flex items-center justify-between space-x-6">
              <router-link to="/" class="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Cancel</router-link>
                  <input @click="createContact()"  class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4 text-center" value="Create">
            </div>
            <!-- <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Create</button> -->
          </form>

          <!-- <hr class="my-6 border-gray-300 w-full"> -->
        </div>
      </div>

    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CreateContact',
    data(){
      return {
        firstName: '',
        lastName: '',
        contactPicture:'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
        countryCode: '',
        phoneNumber: '',
        favourite: false,
        error: '',
      }
    },
    mounted(){
        if(!localStorage.getItem("token")){
                this.$router.push({ name: 'Login' });
        } 
        else{
          return true
        }
    },
    methods: {
      
      createContact(){
        const contactBody ={
          first_name: this.firstName,
          last_name: this.lastName,
          contact_picture: this.contactPicture,
          country_code: this.countryCode,
          phone_number: this.phoneNumber,
          is_favorite: this.favourite
        }
        console.log(contactBody)
        
        if(this.firstName == "" || this.lastName == "" || this.countryCode == "" || this.phoneNumber == ""){
          this.error = "All field are neede"
          // this.$router.push({ path: '/' });
          return false
        } 
        else{ 
          axios.post("https://mi-contactsapi.herokuapp.com/api/v1/contacts/", contactBody,
          {
              headers: {
              Authorization:"Bearer "  + localStorage.getItem("token"),
              "Content-Type": " application/json",
              // "Accept": "application/json"
            }
          })
          .then((response) => {
            if(response.status == 200 || response.status == 201){
              console.log(response.status)
              this.$router.push({ path: '/' });
              window.location.reload();
              
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