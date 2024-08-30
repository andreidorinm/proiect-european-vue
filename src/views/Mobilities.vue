<template>
  <div>
    <SecondaryNavbar />

    <div class="max-w-screen-lg mx-auto py-10 px-4 lg:px-8 lg:py-14">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Text Content -->
        <div class="lg:w-2/3">
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            {{ currentContent.title }}
          </h2>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            {{ currentContent.description }}
          </p>

          <ul class="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400">
            <li v-for="(paragraph, index) in currentContent.paragraphs" :key="index">
              {{ paragraph }}
            </li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {{ currentContent.detailsTitle }}
          </h3>

          <ul class="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400 space-y-3">
            <li v-for="(detail, index) in currentContent.details" :key="index">
              <strong>{{ detail.title }}:</strong>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(item, subIndex) in detail.items" :key="subIndex">
                  {{ item }}
                </li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-600 dark:text-gray-400">
            {{ currentContent.conclusion }}
          </p>
        </div>

        <!-- Image Section -->
        <div class="lg:w-1/3 flex justify-center items-start">
          <img :src="currentContent.image.src" :alt="currentContent.image.alt" class="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide, inject } from 'vue';
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
    const imagesData = inject('globalData', ref([]));

    // Example content for each year
    const contentData = ref({
      2021: {
        title: "În anul 2021 de Acreditare",
        description: "Școala noastră a abordat ținta stringentă a dezvoltării digitale...",
        paragraphs: [
          "În perioada 06-12.02.2021, doamnele profesoare Cristina Cotescu...",
          "În perioada 11.-17.04.2021, doamnele profesoare Nicoleta Radu...",
          "În perioada 01.08.-12.08.2021, doamnele profesoare Mădălina Constantin..."
        ],
        detailsTitle: "Detalii despre cursurile abordate:",
        details: [
          {
            title: "Discover the power of Game Based Education and Gamification in education",
            items: [
              "întelegerea diferenței dintre invățarea prin joc și gamificare",
              "experimentarea unor activități de învățare prin joc...",
              "crearea de experiențe de învățare out-door..."
            ]
          },
          {
            title: "Cloud Computing for Education",
            items: [
              "utilizarea Google drive și Suitei Google pentru educație",
              "crearea și utilizarea de Google forms pentru evaluare...",
              "utilizarea de aplicații digitale gratuite pentru prezentări: Padlet"
            ]
          }
        ],
        conclusion: "Profesorii au dobândit competențe de a aplica...",
        image: {
          src: "/img/materiale/poster.png",
          alt: "Educational Event 2021"
        }
      },
      2022: {
        title: "În anul 2022 de Acreditare",
        description: "În 2022, am continuat să ne dezvoltăm abilitățile digitale...",
        paragraphs: [
          "În perioada 06-12.02.2022, doamnele profesoare Cristina Cotescu...",
          "În perioada 11.-17.04.2022, doamnele profesoare Nicoleta Radu...",
          "În perioada 01.08.-12.08.2022, doamnele profesoare Mădălina Constantin..."
        ],
        detailsTitle: "Detalii despre cursurile abordate:",
        details: [
          {
            title: "Discover the power of Game Based Education and Gamification in education",
            items: [
              "întelegerea diferenței dintre invățarea prin joc și gamificare",
              "experimentarea unor activități de învățare prin joc...",
              "crearea de experiențe de învățare out-door..."
            ]
          },
          {
            title: "TEL- Technology Enhanced Learning",
            items: [
              "crearea unui blog și a unui website pe platforme gratuite",
              "editare clipuri video cu Ed-puzzle.com...",
              "crearea de identități virtuale (avataruri)"
            ]
          }
        ],
        conclusion: "Profesorii au dobândit competențe de a aplica...",
        image: {
          src: "path_to_image_for_2022.jpg",
          alt: "Educational Event 2022"
        }
      }
      // Add more years as needed
    });

    // Computed property to get the current content based on the selected year
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
