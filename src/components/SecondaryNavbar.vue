<template>
  <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div class="flex flex-row items-center gap-5 mt-5 sm:justify-around sm:mt-0 sm:pl-5">
        <div class="hs-dropdown relative inline-flex">
          <button id="hs-dropdown-default" type="button"
            class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            {{ selectedYear ? selectedYear : 'Alege o perioada' }}
            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
            aria-labelledby="hs-dropdown-default">
            <a v-for="data in yearData" :key="data.year"
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              @click="selectYear(data.year)"> <!-- Use @click here -->
              {{ data.year }}
            </a>
          </div>
        </div>
        <button :disabled="!selectedYear || selectedYear === 'Alege o perioada'"
          class="font-medium text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300">
          Landing
        </button>

        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          href="#">Account</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          href="#">Work</a>
        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          href="#">Blog</a>
      </div>
    </nav>
  </header>
</template>

<script>
import yearData from '../year.json';  // Adjust the path accordingly

import { defineComponent } from "vue";

export default defineComponent({
  name: 'SecondaryNavbar',
  data() {
    return {
      yearData,
      selectedYear: null  // Stores the selected year from dropdown
    };
  },
  methods: {
    selectYear(year) {
      this.selectedYear = year;
      // Additional code to close dropdown if required.
    }
  }
})
</script>
