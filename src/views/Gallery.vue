<template>
  <div>
    <SecondaryNavbar />

    <div class="max-w-screen-xl mx-auto py-10 px-4 lg:px-8 lg:py-14">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {{ currentContent.title }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ currentContent.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(image, index) in currentContent.images" :key="index" class="flex justify-center items-center">
          <img :src="image.src" :alt="image.alt" class="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide } from 'vue';
import SecondaryNavbar from '../components/SecondaryNavbar.vue';

export default defineComponent({
  name: 'Gallery',
  components: {
    SecondaryNavbar,
  },
  props: {
    year: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const currentYear = ref(props.year);

    const contentData = ref({
      2021: {
        title: '2021: Un An de Acreditare Digitală',
        description:
          'Acest album de imagini evidențiază inițiativele cheie ale școlii noastre din 2021, axate pe dezvoltarea competențelor digitale și implementarea metodelor de predare inovatoare prin programe de formare internațională.',
        images: [
          { src: 'https://erasmussfantulnicolae.b-cdn.net/img/home/12.jpeg', alt: 'Descriere imagine 1' },
        ],
      },
      2022: {
        title: 'Galerie Foto 2022',
        description:
          'Acest album de imagini evidențiază dezvoltarea continuă a competențelor digitale și strategiile educaționale implementate în 2022.',
        images: [
          { src: '/images/2022/image1.jpg', alt: 'Descriere imagine 1' },
          { src: '/images/2022/image2.jpg', alt: 'Descriere imagine 2' },
        ],
      },
    });

    const currentContent = computed(() => {
      return contentData.value[currentYear.value] || contentData.value[2021];
    });

    provide('selectedYear', currentYear);

    function updateSelectedYear(year) {
      currentYear.value = year;
    }

    provide('updateSelectedYear', updateSelectedYear);

    return {
      currentYear,
      currentContent,
    };
  },
});
</script>
