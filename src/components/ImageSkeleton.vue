<template>
  <div class="skeleton-wrapper">
    <div v-for="n in count" :key="n" class="skeleton"></div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped>
.skeleton-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skeleton {
  width: 100%;
  height: 52px; 
  padding-top: 100%; 
  background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
