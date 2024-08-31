<template>
  <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="text-center">
      <div>
        <a class="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">Proiect European</a>
      </div>

      <div class="mt-3">
        <p class="text-gray-500">„Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin, însă,
          exclusiv autorului (autorilor) și nu reflectă neapărat punctele de vedere și opiniile Uniunii Europene sau ale
          ANPCDEFP. Nici Uniunea Europeană și nici ANPCDEFP nu pot fi considerate răspunzătoare pentru acestea”.
        </p>
        <br>
        <p class="text-gray-500 text-center">
          ©Școala Gimnazială Specială Sfântul Nicolae. 2023
        </p>
      </div>

      <div class="mt-3 space-x-2">
        <!-- Facebook Link -->
        <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="https://www.facebook.com/p/%C8%98coala-Profesional%C4%83-Special%C4%83-Sf-Nicolae-100063916208901/?locale=ro_RO"
          target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" class="w-6 h-6">
            <path d="M22.676 0h-21.352c-0.732 0-1.324 0.592-1.324 1.324v21.352c0 0.732 0.592 1.324 1.324 1.324h11.493v-9.294h-3.126v-3.622h3.126v-2.672c0-3.089 1.89-4.771 4.646-4.771 1.325 0 2.463 0.099 2.794 0.143v3.24h-1.916c-1.504 0-1.795 0.715-1.795 1.762v2.307h3.589l-0.467 3.622h-3.122v9.294h6.123c0.732 0 1.324-0.592 1.324-1.324v-21.352c0-0.732-0.592-1.324-1.324-1.324z"></path>
          </svg>
        </a>

        <!-- Personal Website Link -->
        <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="http://scoalaprofesionalasfnicolae.ro/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" class="w-6 h-6">
            <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-0.203 0.007-0.405 0.019-0.605 1.591-0.196 3.672-0.372 5.591-0.455-0.019 0.274-0.038 0.552-0.038 0.83 0 0.552 0.048 1.084 0.133 1.597 1.523-0.088 3.129-0.146 4.795-0.146s3.272 0.058 4.795 0.146c0.086-0.513 0.133-1.045 0.133-1.597 0-0.279-0.019-0.556-0.038-0.83 1.918 0.083 4 0.259 5.591 0.455 0.012 0.2 0.019 0.402 0.019 0.605 0 4.411-3.589 8-8 8zm4.181-4.208c-1.314-0.369-2.664-0.723-4.181-0.723s-2.867 0.354-4.181 0.723c-0.573-0.836-0.931-1.829-0.931-2.792 0-2.209 2.507-4 5.5-4s5.5 1.791 5.5 4c0 0.963-0.358 1.956-0.931 2.792zm-4.181-7.792c-1.933 0-3.5-0.672-3.5-1.5s1.567-1.5 3.5-1.5 3.5 0.672 3.5 1.5-1.567 1.5-3.5 1.5z"></path>
          </svg>
        </a>

        <!-- Erasmus Website Link -->
        <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="https://erasmus-plus.ec.europa.eu/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="0" class="w-6 h-6">
            <path d="M3 3v18h18v-18h-18zM21 21h-18v-18h18v18zM9.75 9.75h4.5v4.5h-4.5v-4.5zM15 8.25h-6v7.5h6v-7.5zM9.75 4.5h4.5v2.25h-4.5v-2.25zM4.5 9.75h2.25v4.5h-2.25v-4.5zM9.75 17.25v-2.25h4.5v2.25h-4.5z"></path>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>
