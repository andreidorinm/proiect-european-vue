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

      <!-- Display Videos -->
      <div v-for="(video, index) in currentContent.videos" :key="'video-' + index" class="mb-8">
        <iframe :src="video.src" :title="video.title" controls class="rounded-lg shadow-lg w-full h-[58vh] object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
          Your browser does not support the video tag.
        </iframe>
      </div>

      <!-- Display Documents -->
      <div v-for="(document, index) in currentContent.documents" :key="'doc-' + index" class="mb-8">
        <!-- For PDF Files -->
        <div v-if="document.type === 'pdf'">
          <h2 class="text-xl font-semibold mb-4">{{ document.title }}</h2>
          <iframe :src="document.src" class="rounded-lg shadow-lg w-full h-[58vh]" frameborder="0">
            Your browser does not support PDFs.
          </iframe>
        </div>
        <!-- For PPTX Files -->
        <div v-else-if="document.type === 'pptx'">
          <h2 class="text-xl font-semibold mb-4">{{ document.title }}</h2>
          <iframe :src="'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(document.src)"
            class="rounded-lg shadow-lg w-full h-[58vh]" frameborder="0">
            Your browser does not support PPTX files.
          </iframe>
        </div>
        <!-- For Other File Types -->
        <div v-else>
          <a :href="document.src" class="text-blue-500 underline">{{ document.title }}</a>
        </div>
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
        description:
          "Acest videoclip evidențiază inițiativele cheie ale școlii noastre din 2021, axate pe dezvoltarea competențelor digitale și implementarea metodelor de predare inovatoare prin programe de formare internațională.",
        videos: [
          {
            src: "https://www.youtube.com/embed/cqzvFX4vY4o",
            title:
              "2021: Curs- The power of Game Based Learning and Gamification in education",
          },
        ],
        documents: [
          {
            src: "https://erasmussfantulnicolae.b-cdn.net/pdf/prezentari/2021/2.%20Prezentare%20mobilitate%20Turcia.pdf",
            title: "Prezentare Turcia",
            type: "pdf",
          }
        ],
      },
      2022: {
        title: "2022: Prezentare mobilitate Budapesta si Robotics and STEAM Education",
        description:
          "Aceste videoclipuri evidențiază inițiativele cheie ale școlii noastre din 2022, axate pe dezvoltarea competențelor digitale și implementarea metodelor de predare inovatoare prin programe de formare internațională.",
        videos: [
          {
            src: "https://www.youtube.com/embed/pFjQ7PUetoE",
            title: "Prezentare mobilitate Budapesta",
          },
          {
            src: "https://www.youtube.com/embed/qVpZ8mcCL18",
            title: "Robotics and STEAM Education 20222",
          },
        ],
        documents: [
          {
            src: "https://erasmussfantulnicolae.b-cdn.net/pdf/prezentari/2022/Mobilitate%20elevi%20Spania%2C%20CP%20Rioturbio%2C%2015-19%20mai%202023.pdf",
            title: "Prezentare Spania",
            type: "pdf",
          }
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
