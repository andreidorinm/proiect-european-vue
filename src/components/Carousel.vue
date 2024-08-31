<template>
  <div class="relative w-full max-w-5xl mx-auto overflow-hidden" style="height: 500px;">
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="setSlide(index)"
        class="w-3 h-3 rounded-full focus:outline-none"
        :class="{
          'bg-white': currentIndex === index,
          'bg-gray-400': currentIndex !== index,
        }"
      ></button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 5000, // 5 seconds
    },
  },
  setup(props) {
    const currentIndex = ref(0);
    let slideInterval = null;

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + props.images.length) % props.images.length;
    };

    const setSlide = (index) => {
      currentIndex.value = index;
    };

    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, props.interval);
    };

    const stopSlideShow = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };

    onMounted(() => {
      startSlideShow();
    });

    onUnmounted(() => {
      stopSlideShow();
    });

    return {
      currentIndex,
      nextSlide,
      prevSlide,
      setSlide,
    };
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%; /* Full width of the container */
  max-width: 1280px; /* Adjust max-width as needed */
  height: 500px; /* Fixed height */
  margin: 0 auto; /* Center the carousel */
}

.carousel-container img {
  width: 100%; /* Make image take full width */
  height: 100%; /* Make image take full height */
  object-fit: cover; /* Ensure the image covers the entire container */
}
</style>
