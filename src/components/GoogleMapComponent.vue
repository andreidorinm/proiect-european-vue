<template>
  <GoogleMap :api-key="apiKey" class="rounded-map" style="width: 100%; height: 450px" :center="center" :zoom="4">
    <Marker 
      v-for="(university, index) in universities" 
      :key="index"
      :options="{ position: university.location }"
      :label="university.name"
    />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  name: "GoogleMapComponent",
  components: { GoogleMap, Marker },
  setup() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const center = { lat: 50.1109, lng: 10.6821 } // Roughly central Europe
    
    const universities = [
      { name: "Oxford", location: { lat: 51.754816, lng: -1.254367 } },
      { name: "Cambridge", location: { lat: 52.204267, lng: 0.114904 } },
      { name: "Sorbonne", location: { lat: 48.848948, lng: 2.343195 } },
      { name: "Humboldt", location: { lat: 52.518623, lng: 13.398849 } },
      // ... add other universities as required
    ];

    return { apiKey, center, universities }
  },
})
</script>

<style scoped>
.rounded-map {
  border-radius: 20px;
  overflow: hidden;
}
</style>
