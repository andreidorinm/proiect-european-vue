<template>
  <div>
    <div v-if="yearEvents">
      <h2>{{ currentYear }}</h2>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="event in yearEvents" :key="event.title" class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div class="h-52 flex flex-wrap overflow-hidden rounded-t-xl">
            <!-- Loop through the images for each event -->
            <img v-for="image in event.images" :key="image.src" :src="image.src" :alt="image.alt" class="object-cover w-full h-full">
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
          <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <!-- The rest of your code remains unchanged -->
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import NotFound from './NotFound.vue';
import imagesData from '../../public/data/images.json'

export default defineComponent({
  components: {
    NotFound
  },
  props: {
    year: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentYear() {
      return this.year;
    },
    yearEvents() {
      return imagesData.find(data => data.year === this.currentYear)?.data;
    }
  }
})
</script>
