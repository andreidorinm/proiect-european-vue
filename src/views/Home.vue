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
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/1.jpeg', alt: 'Activitati 1' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/2.jpeg', alt: 'Activitati 2' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/3.jpeg', alt: 'Activitati 3' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/4.jpeg', alt: 'Activitati 4' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/5.jpeg', alt: 'Activitati 5' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/6.jpeg', alt: 'Activitati 6' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/7.jpeg', alt: 'Activitati 7' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/8.jpeg', alt: 'Activitati 8' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/9.jpeg', alt: 'Activitati 9' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/10.jpeg', alt: 'Activitati 10' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/11.jpeg', alt: 'Activitati 11' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/12.jpeg', alt: 'Activitati 12' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/13.jpeg', alt: 'Activitati 13' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/14.jpeg', alt: 'Activitati 14' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/15.jpeg', alt: 'Activitati 15' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/16.jpeg', alt: 'Activitati 16' },
        { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/17.jpeg', alt: 'Activitati 17' }
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


