<template>
  <div>
    <div v-if="yearEvents">
      <h2>{{ currentYear }}</h2>
      <div v-for="event in yearEvents" :key="event.title">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <div v-for="image in event.images" :key="image">
          <img :src="'../public/' + image" :alt="event.title">
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Display Not Found Component or any other content when there's no data for the year -->
      <NotFound />
    </div>
  </div>
</template>

<script>
import yearData from '../year.json';
import NotFound from './NotFound.vue';

export default {
  components: {
    NotFound,
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
      return yearData.find(data => data.year === this.currentYear)?.data;
    }
  }
}
</script>
