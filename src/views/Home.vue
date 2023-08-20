<template>
<div class="mb-6">
  <SecondaryNavbar/>
</div>
<HeroSection/>

  <main class="mt-4 bg-gray-50 dark:bg-gray-900">
      <div class="px-4 py-6 sm:px-0">
          <div class="p-4 text-center text-gray-400 border-4 border-gray-200 border-dashed rounded-lg h-96">
              <GoogleMapComponent />
              <router-link to="/about" class="text-indigo-600 underline hover:text-indigo-500">About page</router-link>.
          </div>
      </div>
  </main>
</template>


<script>
import GoogleMapComponent from "../components/GoogleMapComponent.vue";
import SecondaryNavbar from "../components/SecondaryNavbar.vue";
import HeroSection from "../components/HeroSection.vue";
import { defineComponent } from "vue";


export default defineComponent({
  components: {
    GoogleMapComponent, 
    SecondaryNavbar,
    HeroSection
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  methods: {
    updateYear(newYear) {
      this.currentYear = newYear;
    }
  }
});

</script>
