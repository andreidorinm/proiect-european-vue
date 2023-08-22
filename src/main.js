import { createApp, ref } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import('preline')
import './assets/main.css'

// Create Router Instance
const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

// Handle Hot Module Replacement
if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

// Create a reactive object to hold the data
const globalData = ref(null);

async function fetchData() {
  try {
    console.log('Fetching data...');
    const response = await fetch(`${import.meta.env.BASE_URL}data/images.json`);
    console.log('Response:', response);
    
    if (response.ok) {
      globalData.value = await response.json();
    } else {
      console.error('Failed to fetch the JSON data');
    }
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

fetchData();

const app = createApp(App)

app.provide('globalData', globalData);

app.use(router).mount('#app')
