<template>
  <div class="bg-gray-100 h-[36rem] flex items-center justify-center ">
    <div class="flex items-start  drop-shadow-md rounded-lg  w-2/4 bg-white space-x-6 p-10">
        <img class="w-40 h-40 rounded-xl border-4 border-slate-50 object-cover"
            :src="contact['contact_picture']"/>
        <div class="flex flex-col px-5 py-1 w-full">
          <div class="flex items-center justify-between">
            <h4 class="font-light text-gray-600 text-sm">Name: </h4>
            <h4 class="font-bold text-lg text-gray-600">{{contact['first_name']}} {{contact['last_name']}}</h4>
          </div>
           <div class="flex items-center justify-between">
            <h4 class="font-light text-gray-600 text-sm">Phone: </h4>
            <h4 class="font-bold text-lg text-gray-600">{{contact['phone_number']}}</h4>
          </div>
           <div class="flex items-center justify-between">
            <h4 class="font-light text-gray-600 text-sm">Country code: </h4>
            <h4 class="font-bold text-lg text-gray-600">{{contact['country_code']}}</h4>
          </div>
           <div class="flex items-center justify-between">
            <h4 class="font-light text-gray-600 text-sm">Favourite: </h4>
            <h4 class="font-bold text-lg text-gray-600">{{contact['is_favorite']}}</h4>
          </div>
          
           <div class="flex items-center justify-between space-x-6">
              <router-link to="/" type="submit" class="w-full block bg-red-500 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Home</router-link>
                  <button @click="showModel(contact['id'], contact['first_name'], contact['last_name'], contact['phone_number'], contact['country_code'], contact['is_favorite'], contact['contact_picture'])"  class="w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Edit</button>
            </div>

        </div>
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
                <input @click="updateContact()" type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
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
    name: 'VuewContact',
    data(){
      return {
        contact: '',
        id: this.$route.params.id,
        isOPened: false,
        contacts: [],
        firstName: '',
        lastName: '',
        contactPicture: '',
        countryCode: '',
        phoneNumber: '',
        isFavorite:'',
        Contactid:'',
      }
    },
    mounted(){
        if(!localStorage.getItem("token")){
                this.$router.push({ name: 'Login' });
        } 
        else{
        axios.get(
            "https://mi-contactsapi.herokuapp.com/api/v1/contacts/" + this.id,
            {
                headers: {
                Authorization:"Bearer "  + localStorage.getItem("token"),
                "Content-Type": " application/json",
                // "Accept": "application/json"
            }
            }
        )
        .then((response) => {
          this.contact = response.data;
          console.log(this.contact)
        })
        
        .catch((eror) => console.log(eror))
        }
        
    },
    methods:{
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
    }
  }

}
</script>

<style>

</style>