<template>
  <div>
    <SecondaryNavbar />

    <div v-if="pagedEvents && pagedEvents.length">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="event in pagedEvents" :key="event.title"
          class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="h-52 flex flex-wrap overflow-hidden rounded-t-xl">
            <img v-for="image in event.images" :key="image.src" :src="image.src" :alt="image.alt"
              class="object-cover w-full h-full">
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
            <!-- The rest of your code remains unchanged -->
          </div>
        </div>
      </div>

      <!-- Pagination component -->
      <nav class="flex justify-center items-center space-x-2" v-if="totalPages > 1">
        <a v-if="currentPage > 1" @click="prevPage"
          class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md cursor-pointer">
          <span aria-hidden="true">«</span>
          <span class="sr-only">Previous</span>
        </a>

        <a v-for="page in totalPages" :key="page"
          :class="page === currentPage ? 'w-10 h-10 bg-blue-500 text-white' : 'w-10 h-10 text-gray-500 hover:text-blue-600'"
          class="p-4 inline-flex items-center text-sm font-medium rounded-full cursor-pointer" @click="goToPage(page)">
          {{ page }}
        </a>

        <a v-if="currentPage < totalPages" @click="nextPage"
          class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md cursor-pointer">
          <span class="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </a>
      </nav>


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

export default defineComponent({
  name: 'MediaPage',

  components: {
    NotFound,
    SecondaryNavbar
  },

  props: {
    year: {
      type: Number,
      required: true
    }
  },
  methods: {
    scrollToTop() {
        const topElement = document.getElementById('top-of-events'); 
        topElement.scrollIntoView({ behavior: 'smooth' });
    }
},

  setup(props, { emit }) {
    const imagesData = inject('globalData', ref([]));
    const currentYear = ref(props.year);
    provide('selectedYear', currentYear);

    const yearEvents = computed(() => {
      return imagesData.value.find(data => data.year === currentYear.value)?.data || [];
    });

    const currentPage = ref(1);
    const itemsPerPage = ref(6);
    const totalItems = computed(() => yearEvents.value.length);
    const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

    const pagedEvents = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      return yearEvents.value.slice(startIndex, endIndex);
    });

    function nextPage() {
      if (currentPage.value < totalPages.value) currentPage.value++;
    }

    function prevPage() {
      if (currentPage.value > 1) currentPage.value--;
    }

    function goToPage(page) {
      currentPage.value = page;
    }

    function updateSelectedYear(year) {
      currentYear.value = year;
      emit('year-updated', year);
    }

    provide('updateSelectedYear', updateSelectedYear);

    return {
      currentYear,
      pagedEvents,
      totalPages,
      currentPage,
      nextPage,
      prevPage,
      goToPage
    };
  }
});
</script>
