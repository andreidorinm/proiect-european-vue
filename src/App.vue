<template>
  <div>
    <nav class="bg-gray-800 sticky top-0 z-50">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                  class="w-20 h-20"
                  src="/img/logos/logo_scoala.svg"
                  alt="Scoala logo"
              />
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10">
                <router-link
                    v-for="(link, i) in links"
                    :key="i"
                    :to="link.to"
                    custom
                    v-slot="{ navigate, href, isExactActive }"
                >
                  <a
                      :href="href"
                      @click="navigate"
                      class="px-3 py-2 text-sm font-medium rounded-md"
                      :class="[
                      isExactActive
                        ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                      i > 0 && 'ml-4',
                    ]"
                  >{{ link.text }}</a
                  >
                </router-link>
              </div>
            </div>
          </div>


          <div class="flex -mr-2 md:hidden">
            <!-- Mobile menu button -->
            <button
                class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                @click="showMenu = !showMenu"
            >
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                  class="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                  class="hidden w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
      <div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <router-link
              v-for="(link, i) in links"
              :key="i"
              :to="link.to"
              custom
              v-slot="{ navigate, href, isExactActive }"
          >
            <a
                :href="href"
                @click="navigate().then(() => (showMenu = false))"
                class="block px-3 py-2 text-base font-medium rounded-md"
                :class="[
                isExactActive
                  ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                i > 0 && 'mt-1',
              ]"
            >{{ link.text }}</a
            >
          </router-link>
        </div>
      </div>
    </nav>

    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>

    <div class="max-w-screen-xl py-6 mx-auto sm:px-6 lg:px-8">
      <router-view/>
    </div>
  </div>
  <Footer/>
</template>

<script>
import {defineComponent} from 'vue'
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Footer
  },
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      {text: 'Acasa', to: '/'},
      {text: 'Tutoriale', to: '/tutoriale'},
      {text: 'Despre noi', to: '/about'},
    ],
  }),
})
</script>
