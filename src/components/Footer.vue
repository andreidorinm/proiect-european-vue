<template>
  <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="text-center">
      <div>
        <a class="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">Proiect
          European</a>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636A9 9 0 116.636 18.364 9 9 0 0118.364 5.636z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 8.25v3.376a.375.375 0 01-.375.375h-2.063a.375.375 0 00-.375.375v3.625a.375.375 0 01-.375.375h-3.25a.375.375 0 01-.375-.375v-3.625a.375.375 0 00-.375-.375H7.125a.375.375 0 01-.375-.375V8.25a.375.375 0 01.375-.375h2.563a.375.375 0 00.375-.375V5.125a.375.375 0 01.375-.375h2.25a.375.375 0 01.375.375v2.375a.375.375 0 00.375.375h2.563a.375.375 0 01.375.375z" />
          </svg>
        </a>

        <!-- Personal Website Link -->
        <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="http://scoalaprofesionalasfnicolae.ro/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75c-2.625 0-5.366.21-7.963.545-1.216.158-2.037.991-2.037 1.916 0 5.052.964 10.092 3.282 13.596a4.785 4.785 0 003.256 1.827c1.518.08 3.042.142 4.585.142 1.543 0 3.067-.062 4.585-.142a4.785 4.785 0 003.256-1.827c2.318-3.504 3.282-8.544 3.282-13.596 0-.925-.82-1.758-2.037-1.916-2.597-.336-5.338-.545-7.963-.545z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75h1.5v1.5H9v-1.5zM12 12.75h1.5v1.5H12v-1.5zM15 12.75h1.5v1.5H15v-1.5z" />
          </svg>
        </a>

        <!-- Erasmus Website Link -->
        <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="https://erasmus-plus.ec.europa.eu/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18v18H3V3z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75v4.5h4.5v-4.5h-4.5z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 4.5h4.5v4.5h-4.5V4.5zM4.5 9.75h4.5v4.5H4.5v-4.5zM9.75 14.25v4.5h4.5v-4.5h-4.5zM14.25 9.75h4.5v4.5h-4.5v-4.5zM9.75 9.75h4.5v4.5h-4.5v-4.5z" />
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
