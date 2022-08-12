<template>
  <section class="flex flex-col justify-center items-center md:flex-row h-screen  bottom-0 right-0 bg-gray-100">


      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-aut md:w-1/2 xl:w-1/3 h-fit px-6 py-6 lg:px-16 xl:px-12
            flex items-center justify-center rounded-lg shadow-xl">

        <div class="w-full h-100">
         
          <h1 class="text-xl md:text-xl font-bold leading-tight mt-6">Edit Contact</h1>

          <form class="mt-6" action="#" method="POST">
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
                <input type="file" class="opacity-0" required/>
            </label>
            <div>
              <input type="text" name="" id="" placeholder="First name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Last name" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div>
              <input type="phone" name="" id="" placeholder="Phone" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-6 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            </div>
            <div class="mt-4">
              <input type="text" name="" id="" placeholder="Country code" minlength="6" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required>
            </div>
            <label class="text-right pt-4 block">
              Your favourite?
              <input type="checkbox" class=" checked:bg-blue-500" />
            </label>
            <div class="flex items-center justify-between space-x-6">
              <router-link to="/" type="submit" class="w-full block bg-red-500 hover:bg-red-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Cancel</router-link>
                  <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-full
                  px-4 py-2 mt-4">Create</button>
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
export default {
    name: 'EditContact',
    data(){
        return{

        }
    }

}
</script>

<style>

</style>