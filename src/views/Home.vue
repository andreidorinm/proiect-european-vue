<template>
  <div class="mb-6">
    <SecondaryNavbar />
  </div>
  <HeroSection />

  <main class="mt-4 bg-gray-50 dark:bg-gray-900">
    <div class="px-4 py-6 sm:px-0">
      <div class="p-4 text-center text-gray-400 border-4 border-gray-200 border-dashed rounded-lg">
        <Carousel :images="carouselImages" />
      </div>
    </div>
  </main>
</template>

<script>
import GoogleMapComponent from "../components/GoogleMapComponent.vue";
import SecondaryNavbar from "../components/SecondaryNavbar.vue";
import HeroSection from "../components/HeroSection.vue";
import Carousel from '../components/Carousel.vue'
import { defineComponent, ref, provide } from "vue";

export default defineComponent({
  components: {
    GoogleMapComponent,
    SecondaryNavbar,
    HeroSection,
    Carousel
  },
  setup() {
    const selectedYear = ref(2021);
    const updateSelectedYear = (year) => {
      selectedYear.value = year;
    }

    provide('selectedYear', selectedYear);
    provide('updateSelectedYear', updateSelectedYear);

    return { selectedYear, updateSelectedYear };
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      carouselImages: [
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/materiale/poza1.jpg', alt: 'Activitati 1' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/materiale/poza2.jpg', alt: 'Activitati 2' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/materiale/poza3.jpg', alt: 'Activitati 3' },
      ]
    }
  },
  methods: {
    updateYear(newYear) {
      this.currentYear = newYear;
    }
  }
});
</script>
