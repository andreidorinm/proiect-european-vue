<template>
  <div class="flex items-center bg-white p-4 rounded-lg shadow-md">
    <button 
      @click="decrementYear"
      class="px-3 py-2 text-white bg-red-500 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
    >
      ←
    </button>
    <span class="mx-4 text-lg font-medium">{{ currentYear }}</span>
    <button 
      @click="incrementYear"
      class="px-3 py-2 text-white bg-green-500 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
    >
      →
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  methods: {
    incrementYear() {
      this.currentYear++;
      this.$emit('yearChanged', this.currentYear);
    },
    decrementYear() {
      this.currentYear--;
      this.$emit('yearChanged', this.currentYear);
    }
  }
}
</script>
