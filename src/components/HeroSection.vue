<template>
  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Grid -->
    <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div class="lg:col-span-3">
        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Discover Europe with Erasmus+</h1>
        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Experience the diverse cultures, languages, and educational systems of Europe. Join the Erasmus journey!</p>
  
        <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <a class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="/about">
            Learn More
          </a>
        </div>
  
        <!-- Partnering Institutions -->
        <div class="mt-6 lg:mt-12">
          <span class="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">Partnering Institutions:</span>
  
          <div class="mt-4 flex gap-x-8">
            <!-- You can insert logos of the partnering institutions here. -->
          </div>
        </div>
        <!-- End Partnering Institutions -->
      </div>
      <!-- End Col -->
  
      <div class="lg:col-span-4 mt-10 lg:mt-0">
        <img class="w-full rounded-xl" src="https://cdn.aiidatapro.net/media/bc/f7/fe/t780x490/bcf7fe5e76503f091a1c2f12db1268b6.jpg" alt="Erasmus Students">
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Hero -->
  </template>
  
  <script>
  import {defineComponent} from "vue";
  
  export default defineComponent({
        name: 'HeroSection'
      }
  )
  </script>
  