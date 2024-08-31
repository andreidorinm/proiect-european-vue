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

      <div class="flex justify-center items-center">
        <video :src="currentContent.video.src" :title="currentContent.video.title" controls
          class="rounded-lg shadow-lg w-full h-[58vh] object-cover">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide } from 'vue';
import SecondaryNavbar from '../components/SecondaryNavbar.vue';

export default defineComponent({
  name: 'ProjectDetails',
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
        title: "2021: Un An de Acreditare Digitală",
        description: "Acest videoclip evidențiază inițiativele cheie ale școlii noastre din 2021, axate pe dezvoltarea competențelor digitale și implementarea metodelor de predare inovatoare prin programe de formare internațională.",
        video: {
          src: "/videos/video-2021.mp4",
          title: "Videoclip Educational 2021",
        },
      },
      2022: {
        title: "Educational Video for 2022",
        description: "This video highlights the ongoing development of digital skills and educational strategies implemented in 2022.",
        video: {
          src: "/videos/video-2022.mp4",
          title: "Videoclip Educational 2022",
        },
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
