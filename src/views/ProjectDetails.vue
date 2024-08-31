<template>
  <div>
    <SecondaryNavbar />

    <div class="max-w-screen-lg mx-auto py-10 px-4 lg:px-8 lg:py-14">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="lg:w-2/3">
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            {{ currentContent.title }}
          </h2>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            {{ currentContent.description }}
          </p>

          <ul class="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400">
            <li v-for="(paragraph, index) in currentContent.paragraphs" :key="index">
              {{ paragraph }}
            </li>
          </ul>

          <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {{ currentContent.detailsTitle }}
          </h3>

          <ul class="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-400 space-y-3">
            <li v-for="(detail, index) in currentContent.details" :key="index">
              <strong>{{ detail.title }}:</strong>
              <ul class="list-disc pl-5 space-y-1">
                <li v-for="(item, subIndex) in detail.items" :key="subIndex">
                  {{ item }}
                </li>
              </ul>
            </li>
          </ul>

          <p class="text-gray-600 dark:text-gray-400">
            {{ currentContent.conclusion }}
          </p>
        </div>

        <div class="lg:w-1/3 flex justify-center items-start">
          <img :src="currentContent.image.src" :alt="currentContent.image.alt"
            class="rounded-lg shadow-lg w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide, inject } from 'vue';
import SecondaryNavbar from '../components/SecondaryNavbar.vue';

export default defineComponent({
  name: 'ProjectDetails',
  components: {
    SecondaryNavbar,
  },
  props: {
    year: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const currentYear = ref(props.year);

    const contentData = ref({
      2021: {
        title: "În anul 2021 de Acreditare",
        description: "Școala noastră a abordat ținta stringentă a dezvoltării digitale, realizând 7 mobilități de formare pentru profesori în diverse aplicații digitale care să crească gradul de atractivitate și interactivitate în cadrul lecțiilor și să dezvolte competențele profesorilor de a stoca și share-ui digital, on-line, materiale, documente, lecții.",
        paragraphs: [
          "În perioada 06-12.02.2021, doamnele profesoare Cristina Cotescu și Andreea Blăgoi au parcurs cursul de formare „Discover the power of Game Based Education and Gamification in education”, în Bologna, Italia, furnizat de Erasmus Learning Academy (ELA).",
          "În perioada 11-17.04.2021, doamnele profesoare Nicoleta Radu și Elena Drăgan-Cara au beneficiat de cursul de formare „Cloud Computing for Education”, în Istanbul, Turcia, furnizat de Cappadocia Education.",
          "În perioada 01.08-12.08.2021, doamnele profesoare Mădălina Constantin, Daniela Cara și Alina Țuțu au participat la cursul de formare „TEL- Technology Enhanced Learning” în St. Julian’s, Malta."
        ],
        detailsTitle: "Detalii despre cursurile abordate:",
        details: [
          {
            title: "Discover the power of Game Based Education and Gamification in education",
            items: [
              "Înțelegerea diferenței dintre învățarea prin joc și gamificare",
              "Experimentarea unor activități de învățare prin joc",
              "Înțelegerea modelului de învățare prin gamificare, analiza exemplelor și a instrumentelor de gamificare, stimularea gândirii critice și creative prin gamificare",
              "Utilizarea unor aplicații digitale atât pentru realizarea învățării prin joc cât și a gamificării",
              "Crearea de experiențe de învățare în stilul „Escape Rooms” pentru a crește participarea elevilor",
              "Crearea de experiențe de învățare out-door pentru învățarea prin joc și motivarea",
              "Pașii pentru gamificarea lecțiilor și integrarea mecanismelor de învățare prin joc în predare; cele mai atractive elemente de joc care antrenează elevii în procesul predării-învățării"
            ]
          },
          {
            title: "Cloud Computing for Education",
            items: [
              "Utilizarea Google Drive și Suitei Google pentru educație (Google Docs, Sheets, Slides) pentru colaborare mai facilă între profesori",
              "Utilizarea Google Calendar pentru o informare și comunicare mai eficientă",
              "Crearea și utilizarea de Google Forms pentru evaluare (elevi sau personalul școlii) și alte aplicații online pentru evaluare (ex. Kahoot)",
              "Utilizarea de aplicații digitale gratuite pentru prezentări: Padlet"
            ]
          },
          {
            title: "TEL- Technology Enhanced Learning",
            items: [
              "Crearea unui blog și a unui website pe platforme gratuite (blogger.com, wix.com)",
              "Editare clipuri video cu Ed-puzzle.com",
              "Crearea de diverse exerciții online pentru educație (wordwall.net, learningapps.org)",
              "Înregistrarea ecranului computerului cu Loom.com",
              "Crearea de slide-uri animate cu Adobe Express (express.adobe.com)",
              "Crearea de identități virtuale (avataruri - voki.com, avachara.com, hexatar.com)",
              "Crearea de benzi desenate în scop educativ (storyboardthat.com)",
              "Webquest și wiki",
              "Creare de wiki pentru educație (pbwork.com)",
              "Creare de rebusuri (www.puzzlemaker.discoveryeducation.com), hărți mentale (coggle.it), word clouds (wordart.com)",
              "Creare de infografice cu canva.com",
              "Creare de povești digitale (storyjumper.com)",
              "Utilizarea tablei interactive"
            ]
          }
        ],
        conclusion: "Profesorii au dobândit competențe de a aplica principiile învățării prin joc și gamificării pentru a crește interesul și participarea elevilor. Au învățat să creeze recompense digitale, să upgradeze lecțiile introducând elemente de joc, și să utilizeze resursele gratuite disponibile online pentru a integra diverse aplicații digitale în procesul educațional.",
        image: {
          src: "/img/materiale/poster.png",
          alt: "Educational Event 2021"
        }
      },
      2022: {
        title: "În anul 2022 de Acreditare",
        description: "În 2022, am continuat să ne dezvoltăm abilitățile digitale...",
        paragraphs: [
          "În perioada 06-12.02.2022, doamnele profesoare Cristina Cotescu...",
          "În perioada 11.-17.04.2022, doamnele profesoare Nicoleta Radu...",
          "În perioada 01.08.-12.08.2022, doamnele profesoare Mădălina Constantin..."
        ],
        detailsTitle: "Detalii despre cursurile abordate:",
        details: [
          {
            title: "Discover the power of Game Based Education and Gamification in education",
            items: [
              "întelegerea diferenței dintre invățarea prin joc și gamificare",
              "experimentarea unor activități de învățare prin joc...",
              "crearea de experiențe de învățare out-door..."
            ]
          },
          {
            title: "TEL- Technology Enhanced Learning",
            items: [
              "crearea unui blog și a unui website pe platforme gratuite",
              "editare clipuri video cu Ed-puzzle.com...",
              "crearea de identități virtuale (avataruri)"
            ]
          }
        ],
        conclusion: "Profesorii au dobândit competențe de a aplica...",
        image: {
          src: "path_to_image_for_2022.jpg",
          alt: "Educational Event 2022"
        }
      }
    });

    const currentContent = computed(() => {
      return contentData.value[currentYear.value] || contentData.value[2021];
    });

    provide('selectedYear', currentYear);

    function updateSelectedYear(year) {
      currentYear.value = year;
    }

    provide('updateSelectedYear', updateSelectedYear);

    return {
      currentYear,
      currentContent,
    };
  },
});
</script>
