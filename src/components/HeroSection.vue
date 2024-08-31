<template>
  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Grid -->
    <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div class="lg:col-span-3">
        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Connecting we Grow<br> 
          2021-2026
        </h1>
        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Prin Erasmus+, oferim școlii noastre o educație de top la standarde europene. Împreună inovăm, ne dezvoltăm și atingem excelența.</p>

        <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <a class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            href="/despre-noi">
            Afla mai multe
          </a>
        </div>

        <!-- Partnering Institutions -->
        <div class="mt-6 lg:mt-12">
          <span class="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">Institutii Partenere:</span>

          <div class="mt-4 flex gap-x-4">
            <img class="w-22 h-10" src="/img/logos/scoala_rioturbio.webp">
            <img class="w-22 h-10" src="/img/logos/scoala_cehia2.webp">
            <img class="w-22 h-10" src="/img/logos/scoala_ungaria.webp">
            <img class="w-22 h-10" src="/img/logos/scoala_cehia.webp">
          </div>
        </div>
        <!-- End Partnering Institutions -->
      </div>
      <!-- End Col -->

      <div class="lg:col-span-4 mt-10 lg:mt-0">
        <GoogleMapComponent />
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Hero -->
</template>
  
<script>
import { defineComponent } from "vue";
import GoogleMapComponent from "../components/GoogleMapComponent.vue";


export default defineComponent({
  name: 'HeroSection',
  components: {
    GoogleMapComponent,
  }
}

)
</script>
  