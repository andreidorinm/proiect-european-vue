<template>
    <SecondaryNavbar/>
    <div class="flex items-center justify-start p-4">
      <year-carousel @yearChanged="updateYear"></year-carousel>
      <dynamic-links :currentYear="currentYear"></dynamic-links>
    </div>
  <main>
    <div class="px-4 py-6 sm:px-0">
      <div
        class="p-4 text-center text-gray-400 border-4 border-gray-200 border-dashed rounded-lg  h-96"
      >
        <!-- Embed the GMapComponent -->
        <GoogleMapComponent />
        
        Here goes your content. You can also go to the
        <router-link
          to="/about"
          class="text-indigo-600 underline hover:text-indigo-500"
        >About page</router-link>.
      </div>
    </div>
  </main>
</template>

<script>
// Import the GMapComponent
import GoogleMapComponent from "../components/GoogleMapComponent.vue";
import YearCarousel from "../components/YearCarousel.vue";
import DynamicLinks from "../components/DynamicLinks.vue";
import SecondaryNavbar from "../components/SecondaryNavbar.vue";


export default {
  components: {
    GoogleMapComponent, // Register the component,
    YearCarousel,
    DynamicLinks,
    SecondaryNavbar
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
};

</script>
