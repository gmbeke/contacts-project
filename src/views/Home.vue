<template>
<div class="px-20">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-lg font-bold">Contacts</h1>
    <router-link to="/CreateContact" type="submit" class="w-fit  flex items-center flex-row space-x-4 bg-blue-500 px-6 py-2 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full mt-6">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 strock-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </i>
        Contact
      </router-link>
  </div>
  <div class="h-[30rem] overflow-y-auto">
        <div v-if="contacts.length" >
        
            <table class="w-full text-left bg-gray-100 text-sm capitalize">
                <tr class="text-left border border-gray-300 h-10 bg-gray-300">
                    <th class="pl-4">#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Country code</th>
                    <th>Phone</th>
                    <th>Favourite</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="contact, index in contacts" :key="contact.id" class="border border-gray-300 h-10 hover:bg-gray-200">
                    <td  class="pl-4">{{index + 1}}</td>
                    <td>
                        <img  :src="contact.contact_picture" alt="" class="w-12 h-12 my-2  border object-cover rounded-full">
                    </td>
                    <td>{{contact.first_name}} {{contact.last_name}}</td>
                    <td>{{contact.phone_number}}</td>
                    <td>{{contact.country_code}}</td>
                    <td>{{contact.is_favorite}}</td>
                    <td>
                        <div class="flex space-x-4">
                            <button @click="showModel(contact.id, contact.first_name, contact.last_name, contact.phone_number, contact.country_code, contact.is_favorite, contact.contact_picture)" class="text-yellow-500" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button @click="deleteContact(contact.id)" class="text-red-500" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <router-link :to="{name: 'Contact', params: {id : contact.id}, props: true }" class="text-green-500" >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </router-link>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else class="h-[25rem] flex items-center justify-center">
            <div class="space-y-4">
                <p>Loading</p>
                <span class="flex flex-col items-center justify-center  ">
                    <svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </span>

            </div>
        </div>
        <!-- {{contacts}} -->
    </div>
</div>
<section v-show="isOPened"    class="flex flex-col justify-center items-center md:flex-row h-screen fixed top-0 left-0 bottom-0   right-0 bg-black bg-opacity-50">


      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-aut md:w-1/2 xl:w-1/3 h-fit px-6 py-6 lg:px-16 xl:px-12
            flex items-center justify-center rounded-lg shadow-xl">

        <div class="w-full h-100">
         
          <h1 class="text-xl md:text-xl font-bold leading-tight mt-6">Edit Contact</h1>

          <form class="mt-6" >
             <label class="flex flex-col w-full h-20 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
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
                <input v-model="contactPicture"  type="text" class="opacity-1" placeholder="Image url" required autocomplete="none"/>
            </label>
            <div>
              <input v-model="firstName"  type="text" placeholder="First name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  autocomplete required>
            </div>
            <div>
              <input v-model="lastName" type="text" placeholder="Last name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none"  autocomplete required>
            </div>
            <div>
              <input v-model="phoneNumber" type="phone" placeholder="Phone" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none"  autocomplete required>
            </div>
            <div class="mt-4">
              <input v-model="countryCode" type="text" placeholder="Country code" minlength="6" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required>
            </div>
            <label class="text-right pt-4 block">
              Your favourite?
              <input v-model="isFavorite" type="checkbox" class=" checked:bg-blue-500" />
            </label>
            <div class="flex items-center justify-between space-x-6">
              <button @click="closeModel()"  class="w-full cursor-pointer block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Cancel</button>
                <input @click="updateContact()" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4 text-center" value="Update">
            </div>
          </form>
        </div>
      </div>

    </section>
  
  
</template>

<script>
import axios from 'axios'
export default {
    name: 'HomeView',
    data(){
      return{
        isOPened: false,
        contacts: [],
        firstName: '',
        lastName: '',
        contactPicture: '',
        countryCode: '',
        phoneNumber: '',
        isFavorite:'',
        Contactid:'',
        id: '',



      }
    },
    methods: {
      deleteContact(deleteId){
        axios.delete(
            "https://mi-contactsapi.herokuapp.com/api/v1/contacts/" + deleteId ,
            {
                headers: {
                Authorization:"Bearer "  + localStorage.getItem("token"),
                "Content-Type": " application/json",
                // "Accept": "application/json"
            }
            }
        )
        .then((response) => {
          if(response.status == 200){
            this.contacts = response.data
            this.error = response.data.detail
            console.log(this.error )
            window.location.reload(); 
            this.$router.replace()
          }
          else {
            this.error = "Delete Failed"
            return false
          }
        })
        // .then((response) => console.log(response.data.data.data))
        .catch((eror) => console.log(eror))
      },
      showModel(contId,  fName, lName, pNumber, cCode, isFav, cPicture){
        this.isOPened = true
        this.firstName = fName,
        this.lastName = lName,
        this.contactPicture = cPicture,
        this.countryCode = cCode,
        this.phoneNumber = pNumber,
        this.isFavorite = isFav,
        this.Contactid = contId

        
      },
      closeModel(){
        this.isOPened = false
      },
      

      // Update contact
      updateContact(){
        const updateContactBody ={
          first_name : this.firstName,
          last_name: this.lastName,
          contact_picture: this.contactPicture,
          country_code: this.countryCode,
          phone_number: this.phoneNumber,
          is_favorite: this.favourite
        }
        console.log(updateContactBody)
        
        if(this.firstName == "" || this.lastName == "" || this.countryCode == "" || this.phoneNumber == ""){
          this.error = "All field are neede"
          // this.$router.push({ path: '/' });
          return false
        } 
        else{ 
          // alert(this.Contactid)
          axios.put("https://mi-contactsapi.herokuapp.com/api/v1/contacts/" + this.Contactid, updateContactBody,
          {
              headers: {
              Authorization:"Bearer "  + localStorage.getItem("token"),
              "Content-Type": " application/json",
              // "Accept": "application/json"
            }
          })
        
          .then((response) => {
            if(response.status == 200 || response.status == 201){
              this.isOPened = false,
              console.log(response.status)
              this.$router.push({ path: '/' })
              window.location.reload();
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
    },
    mounted(){

        if(!localStorage.getItem("token")){
            this.$router.push({ name: 'Login' });
        } 
        else{
        axios.get(
            "https://mi-contactsapi.herokuapp.com/api/v1/contacts/" ,
            {
                headers: {
                Authorization:"Bearer "  + localStorage.getItem("token"),
                "Content-Type": " application/json",
                // "Accept": "application/json"
            }
            }
        )
        .then((response) => {
          this.contacts = response.data;
        })
        // .then((response) => console.log(response.data.data.data))
        .catch((eror) => console.log(eror))
        }
        
    },
    

}
</script>

<style>

</style>