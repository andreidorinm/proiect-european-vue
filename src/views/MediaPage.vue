<template>
  <div>
    <SecondaryNavbar />

    <div v-if="pagedEvents && pagedEvents.length">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="event in pagedEvents" :key="event.title"
          class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="h-52 flex flex-wrap overflow-hidden rounded-t-xl">
            <div v-for="image in event.images" :key="image.src" class="object-cover w-full h-full relative">
              <ImageSkeleton v-if="!image.loaded" :count="1" />
              <img :src="image.src" :alt="image.alt"
                class="object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-300"
                :class="image.loaded ? 'opacity-100' : 'opacity-0'" @load="imageOnLoad(image)" />
            </div>
          </div>
          <div class="p-4 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              {{ event.category }}
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {{ event.title }}
            </h3>
            <p class="mt-3 text-gray-500">
              {{ event.description }}
            </p>
          </div>
          <div
            class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          </div>
        </div>
      </div>

      <!-- Pagination component -->
      <Pagination :currentPage="currentPage" :totalPages="totalPages" @nextPage="handlePageChange"
        @prevPage="handlePageChange" @goToPage="handlePageChange" />

    </div>

    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide, inject } from 'vue';
import NotFound from './NotFound.vue';
import SecondaryNavbar from '../components/SecondaryNavbar.vue';
import Pagination from '../components/Pagination.vue';
import usePagination from '../helpers/usePagination';
import ImageSkeleton from '../components/ImageSkeleton.vue';

export default defineComponent({
  name: 'MediaPage',

  components: {
    NotFound,
    SecondaryNavbar,
    Pagination,
    ImageSkeleton
  },

  props: {
    year: {
      type: Number,
      required: true
    }
  },

  setup(props, { emit }) {
    const imagesData = inject('globalData', ref([]));
    const currentYear = ref(props.year);
    provide('selectedYear', currentYear);

    const yearEvents = computed(() => {
    if (!imagesData.value.length) return [];
    
    const yearData = imagesData.value.find(data => data.year === currentYear.value);
    
    if (!yearData) return [];

    return yearData.data.map(event => ({
        ...event,
        images: event.images.map(image => ({
            ...image,
            loaded: image.loaded
        }))
    }));
});

    const { currentPage, totalPages, pagedData, prevPage, nextPage, goToPage } = usePagination(yearEvents, 6);

    function handlePageChange(page) {
      if (page) {
        goToPage(page);
      } else {
        if (currentPage.value < totalPages.value) {
          nextPage();
        } else {
          prevPage();
        }
      }
      scrollToTop();
    }

    function scrollToTop() {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    function updateSelectedYear(year) {
      currentYear.value = year;
      emit('year-updated', year);
    }

    function imageOnLoad(image) {
    image.loaded = true;

    for (const yearData of imagesData.value) {
        for (const eventData of yearData.data) {
            for (const img of eventData.images) {
                if (img.src === image.src) {
                    img.loaded = true;
                    break;
                }
            }
        }
    }
}


    provide('updateSelectedYear', updateSelectedYear);

    return {
      currentYear,
      pagedEvents: pagedData,
      totalPages,
      currentPage,
      handlePageChange,
      imageOnLoad
    };
  }
});
</script>
