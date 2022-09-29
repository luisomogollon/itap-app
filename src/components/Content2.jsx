import React from "react";


const Content2 = () => {
  return (
    <section class="py-20 bg-gray-200  bg-cover bg-fixed overflow-y-auto bg-gradient-to-tr from-gray-600 via-gray-400 to-cyan-800  ">
      <div class="container max-w-6xl mx-auto">
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-8 sm:px-8 xl:px-0">
          <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
                <circle cx="6" cy="14" r="3"></circle>
                <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">
              Recibe Listo para Usar
            </h4>
            <p class="text-base text-center text-gray-500">
              Recibe todo listo para usar desde el primer día.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 8a3 3 0 0 1 0 6"></path>
                <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Tecnología NFC</h4>
            <p class="text-base text-center text-gray-500">
              Nuestra tecnología es la manera mas avanzada de compartir
              información.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                <line x1="12" y1="12" x2="20" y2="7.5"></line>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <line x1="12" y1="12" x2="4" y2="7.5"></line>
                <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">
              Rapido, Facil y seguro
            </h4>
            <p class="text-base text-center text-gray-500">
              Comparte en un Segundo la información que quieras, LA seguridad de
              Tus datos es lo mas importante para nosotros.
            </p>
          </div>

          <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l3 3l-3 3"></path>
                <line x1="13" y1="15" x2="16" y2="15"></line>
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
              </svg>
            </div>
            <h4 class="text-xl font-medium text-gray-700">Compatibilidad</h4>
            <p class="text-base text-center text-gray-500">
              Con Nuestras dos presentaciones todos tus clientes serán
              compatibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content2;
