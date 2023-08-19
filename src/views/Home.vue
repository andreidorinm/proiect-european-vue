<template>
  <SecondaryNavbar/>
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
import SecondaryNavbar from "../components/SecondaryNavbar.vue";

export default {
  components: {
    GoogleMapComponent, // Register the component,
    SecondaryNavbar
  },
};

</script>
