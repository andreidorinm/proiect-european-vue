import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import ProjectDetails from './views/ProjectDetails.vue'
import Mobilities from './views/Mobilities.vue'
import Gallery from './views/Gallery.vue'
import Tutoriale from "./views/Tutoriale.vue";


/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home },
  { path: '/despre-noi', component: About, meta: { title: 'Afla mai multe' } },
  { path: '/:year/mobilitati', component: Mobilities, props: route => ({ year: Number(route.params.year) }) },
  { path: '/:year/detalii-proiect', component: ProjectDetails, props: route => ({ year: Number(route.params.year) }) },
  { path: '/:year/galerie', component: Gallery, props: route => ({ year: Number(route.params.year) }) },
  { path: '/tutoriale', component: Tutoriale, meta: { title: 'Tutoriale' } },
  { path: '/:path(.*)', component: NotFound }
];

