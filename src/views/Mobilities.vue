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

      <div v-for="(video, index) in currentContent.videos" :key="index" class="mb-8">
        <iframe :src="video.src" :title="video.title" controls class="rounded-lg shadow-lg w-full h-[58vh] object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
          Your browser does not support the video tag.
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide } from 'vue';
import SecondaryNavbar from '../components/SecondaryNavbar.vue';

export default defineComponent({
  name: 'Mobilities',
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
        title: "2021: Curs- The power of Game Based Learning and Gamification in education",
        description: "Acest videoclip evidențiază inițiativele cheie ale școlii noastre din 2021, axate pe dezvoltarea competențelor digitale și implementarea metodelor de predare inovatoare prin programe de formare internațională.",
        videos: [
          {
            src: "https://www.youtube.com/embed/cqzvFX4vY4o",
            title: "Videoclip Educational 2021 - Part 1"
          }
        ],
      },
      2022: {
        title: "Educational Video for 2022",
        description: "This video highlights the ongoing development of digital skills and educational strategies implemented in 2022.",
        videos: [
          {
            src: "https://www.youtube.com/embed/pFjQ7PUetoE",
            title: "Videoclip Educational 2022"
          },
          {
            src: "https://www.youtube.com/embed/qVpZ8mcCL18",
            title: "Videoclip Educational 2022 - Part 2"
          },
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
