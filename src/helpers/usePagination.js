// usePagination.js
import { ref, computed } from 'vue';

export default function usePagination(data, itemsPerPage = 6) {
  const currentPage = ref(1);
  const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage));

  const pagedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.value.slice(startIndex, endIndex);
  });

  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  }

  function goToPage(page) {
    currentPage.value = page;
  }

  return { currentPage, totalPages, pagedData, prevPage, nextPage, goToPage };
}
