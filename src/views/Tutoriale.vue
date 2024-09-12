<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Tabs -->
    <div class="flex justify-center mb-6">
      <button
        @click="activeTab = 'Digitalizare'"
        :class="[
          'px-6 py-2 font-semibold rounded-l',
          activeTab === 'Digitalizare' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
        ]"
      >
        Digitalizare
      </button>
      <button
        @click="activeTab = 'Terapii'"
        :class="[
          'px-6 py-2 font-semibold rounded-r',
          activeTab === 'Terapii' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
        ]"
      >
        Terapii
      </button>
    </div>

    <!-- Content -->
    <div v-if="activeTab === 'Digitalizare'">
      <ContentSection :videos="digitalizareVideos" :pdfs="digitalizarePdfs" />
    </div>

    <div v-if="activeTab === 'Terapii'">
      <ContentSection :videos="terapiiVideos" :pdfs="terapiiPdfs" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ContentSection from '../components/ContentSection.vue';

export default defineComponent({
  name: 'Terapie',
  components: {
    ContentSection,
  },
  data() {
    return {
      activeTab: 'Digitalizare',
      digitalizareVideos: [
        'https://www.youtube.com/embed/xIrQSitVQwA',
        'https://www.youtube.com/embed/BVlKDU5iuEc',
        'https://www.youtube.com/embed/z5l4JtcIdzI',
        'https://www.youtube.com/embed/roJkXrcKvdY',
        'https://www.youtube.com/embed/GDbxHjNlr1s',
        'https://www.youtube.com/embed/xvww-ZKFwe4',
      ],
      digitalizarePdfs: [
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/digitalizare/LOOM.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/digitalizare/Turorial%20Storyboard.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/digitalizare/Tutorial%20Avataruri.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/digitalizare/Tutorial%20mind%20maps.pdf',
      ],
      terapiiVideos: [],
      terapiiPdfs: [
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/terapii/_Art-terapie%20workshop.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/terapii/_workshop%20terapia%20masticat%20.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/terapii/Tutorial%20%20Povesti%20senzoriale.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/terapii/Tutorial%20Dans%20Terapie.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/terapii/Tutorial%20STEAM.pdf',
        'https://erasmussfantulnicolae.b-cdn.net/pdf/tutoriale/terapii/Tutorial%20Stimulare%20bazala.pdf',
      ],
    };
  },
});
</script>
