<!-- Pagination.vue -->
<template>
  <nav class="flex justify-center items-center space-x-2">
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
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number
  },
  methods: {
    nextPage() {
      this.$emit('nextPage');
    },
    prevPage() {
      this.$emit('prevPage');
    },
    goToPage(page) {
      this.$emit('goToPage', page);
    }
  }
}
</script>
