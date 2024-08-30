import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import MediaPage from './views/MediaPage.vue'
import Tutoriale from "./views/Tutoriale.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home },
  { path: '/despre-noi', component: About, meta: { title: 'Afla mai multe' } },
  { path: '/:year/link1', component: MediaPage, props: route => ({ year: Number(route.params.year) }) },
  { path: '/tutoriale', component: Tutoriale, meta: { title: 'Tutoriale' } },
  { path: '/:path(.*)', component: NotFound }
];

