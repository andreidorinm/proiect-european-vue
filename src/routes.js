import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import MediaPage from './views/MediaPage.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/:year/link1', component: MediaPage, props: route => ({ year: Number(route.params.year) }) },
  { path: '/:path(.*)', component: NotFound }
];

