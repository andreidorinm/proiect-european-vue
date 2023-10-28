<template>
  <GoogleMap :api-key="apiKey" class="rounded-map" style="width: 100%; height: 450px" :center="center" :zoom="4">
    <Marker v-for="(school, index) in schools" :key="'marker-' + index" :options="{ position: school.location }">
      <InfoWindow :position="school.location">
        <div class="info-content">{{ school.name }}</div>
      </InfoWindow>
    </Marker>
    <Polyline v-for="(institution, index) in institutions" :key="index" :options="{
      path: [institution.location, destinationSchool.location],
      strokeColor: '#007BFF',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      icons: [{
        offset: '100%',
      }],
    }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker, Polyline, InfoWindow } from 'vue3-google-map'

export default defineComponent({
  name: "GoogleMapComponent",
  components: { GoogleMap, Marker, Polyline, InfoWindow },
  setup() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const center = { lat: 50.1109, lng: 10.6821 }

    const institutions = [
      { name: "Szkoła Podstawowa Specjalna nr 327", location: { lat: 52.2165, lng: 20.9584 } },
      { name: "Speciální základní škola Poděbrady", location: { lat: 50.1445, lng: 15.0069 } },
      { name: "Csillagház Általános Iskola", location: { lat: 47.5822, lng: 19.0523 } },
      { name: "CP Rioturbio", location: { lat: 42.8747, lng: -5.6733 } },
    ];

    const destinationSchool = { name: "Special Secondary School St. Nicholas", location: { lat: 44.4214, lng: 26.0828 } };

    const schools = [...institutions, destinationSchool];

    return { apiKey, center, institutions, destinationSchool, schools }
  },
})
</script>

<style scoped>
.info-content {
  padding: 5px;
  font-weight: bold;
}

.rounded-map {
  border-radius: 20px;
  overflow: hidden;
}
</style>
