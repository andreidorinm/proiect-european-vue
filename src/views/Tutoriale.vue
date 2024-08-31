<template>
  <main>

    <div>
      <iframe width="560" height="315"
              :src="videoUrl"
              frameborder="0"
              allowfullscreen>
      </iframe>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      videoUrl: 'https://www.youtube.com/embed/aJaZc4E8Y4U'
    }
  }}
)

</script>
