<template>
  <div class="flex space-x-4 ml-6" style="height: 2.5rem; width: 20.25rem">
    <router-link 
      v-for="link in links" 
      :key="link.href" 
      :to="link.href"
      class="px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors duration-200"
    >
      {{ link.text }}
    </router-link>
  </div>
</template>


<script>
export default {
  props: {
    currentYear: {
      type: Number,
      required: true
    }
  },
  computed: {
    links() {
      return [
        { href: `/${this.currentYear}/link1`, text: `Media for ${this.currentYear}` },
        { href: `/${this.currentYear}/link2`, text: `Link 2 for ${this.currentYear}` }
      ];
    }
  },
  methods: {
    navigateToMedia() {
      this.$router.push(`/media/${this.currentYear}`);
    }
  }
}
</script>
