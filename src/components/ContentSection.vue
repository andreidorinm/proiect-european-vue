<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Video Section -->
      <div v-for="(video, index) in videos" :key="'video-' + index">
        <div class="relative" style="padding-top: 56.25%;">
          <iframe
            :src="video"
            frameborder="0"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <!-- PDF Section -->
      <div v-for="(pdf, index) in pdfs" :key="'pdf-' + index">
        <div class="relative bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <svg class="w-16 h-16 text-red-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.828a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0012.172 2H6zM13 9V3.5L18.5 9H13z"
            />
          </svg>
          <a
            :href="pdf"
            target="_blank"
            class="text-blue-600 hover:underline text-center"
          >
            {{ getPdfLabel(pdf) }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    videos: {
      type: Array,
      default: () => [],
    },
    pdfs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getPdfLabel(pdfUrl) {
      // Extract filename from URL
      let filename = pdfUrl.split('/').pop();

      // Decode URL-encoded characters
      filename = decodeURIComponent(filename);

      // Remove file extension
      filename = filename.replace(/\.[^/.]+$/, '');

      // Replace underscores and hyphens with spaces
      filename = filename.replace(/[_-]+/g, ' ');

      // Capitalize the first letter of each word
      filename = filename.replace(/\b\w/g, (char) => char.toUpperCase());

      return filename;
    },
  },
};
</script>
