<template>
  <header class="bg-white shadow">
    <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
      <nav class="w-full px-4" aria-label="Global">
        <div class="flex flex-wrap items-center gap-3">

          <!-- Dropdown -->
          <div class="hs-dropdown relative">
            <button @click="toggleDropdown" id="hs-dropdown-default" type="button"
              class="hs-dropdown-toggle py-2 px-4 flex justify-center items-center gap-2 rounded-md border bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-offset-gray-750">
              {{ selectedYear }}
              <!-- Dropdown Arrow Icon -->
              <svg class="hs-dropdown-open:rotate-180 w-4 h-4 text-gray-00 dark:text-gray-400" width="16" height="16"
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8 11L14 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div :class="{ 'opacity-100': dropdownOpen, 'opacity-0': !dropdownOpen }"
              class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-72 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 "
              aria-labelledby="hs-dropdown-default">

              <!-- Iterative Links for Dropdown -->
              <!-- Iterative Links for Dropdown -->
              <a v-for="data in imagesData" :key="data.year"
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                @click.stop="selectYear(data.year)">
                {{ data.year }}
              </a>


            </div>
          </div>

          <!-- Navbar Links -->
          <div class="flex flex-wrap space-x-3 sm:space-x-5 sm:mt-0">
            <a :href="`/${selectedYear || ''}/link1`"
              class="font-medium text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">Landing</a>
            <a class="font-medium text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
              href="#">Detalii proiect</a>
            <a class="font-medium text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
              href="#">Mobilitati</a>
            <a class="font-medium text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
              href="#">Galerie</a>
          </div>

        </div>
      </nav>
    </div>
  </header>
</template>


<script>
import { defineComponent, inject, watch, ref } from "vue";


export default defineComponent({
  name: 'SecondaryNavbar',

  setup() {
    const selectedYear = inject('selectedYear');
    const updateSelectedYear = inject('updateSelectedYear');
    const imagesData = inject('globalData');
    const localYear = ref(selectedYear.value);  

    const dropdownOpen = ref(false)

    watch(selectedYear, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        localYear.value = newValue;
      }
    });

    function toggleDropdown() {
      dropdownOpen.value = !dropdownOpen.value;
    }
    function selectYear(year) {
      updateSelectedYear(year);
      dropdownOpen.value = false;
    }

    return {
      selectedYear, updateSelectedYear, localYear, dropdownOpen, toggleDropdown, imagesData, selectYear
    };
  }
})
</script>
