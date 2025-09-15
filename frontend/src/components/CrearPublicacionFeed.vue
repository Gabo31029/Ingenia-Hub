<script setup>
const iconosSVG = {
  img: `<svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-5 h-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
>
  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
  <circle cx="9" cy="9" r="2"></circle>
  <path d="m21 15-5-5L5 21"></path>
</svg>
`,
  calendario: `<svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-5 h-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
>
  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
  <line x1="16" x2="16" y1="2" y2="6"></line>
  <line x1="8" x2="8" y1="2" y2="6"></line>
  <line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
`,
  pin: `<svg
  xmlns="http://www.w3.org/2000/svg"
  class="w-5 h-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
>
  <path
    d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"
  ></path>
  <circle cx="12" cy="10" r="3"></circle>
</svg>
`,
};
</script>
<template>
  <div
    class="hidden bg-white text-card-foreground sm:flex flex-col rounded-xl border max-w-lg w-full p-6"
  >
    <h2 class="font-semibold text-fluid-xl mb-4">Crear publicación</h2>
    <textarea
      v-model="contenido"
      placeholder="¿Qué estás pensando?"
      class="w-full h-24 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-ingenia-primario"
    ></textarea>
    <div class="flex mt-4 px-2">
      <div class="flex items-center self-center gap-4">
        <span
          v-html="iconosSVG.img"
          class="text-ingenia-primario cursor-pointer"
        ></span>
        <span
          v-html="iconosSVG.pin"
          class="text-ingenia-primario cursor-pointer"
        ></span>
        <span
          v-html="iconosSVG.calendario"
          class="text-ingenia-primario cursor-pointer"
        ></span>
      </div>
      <div class="flex flex-1 justify-end">
          <button
            @click="
              $emit('crear-publicacion', contenido);
              contenido = '';
            "
            class="bg-ingenia-primario text-white px-4 py-2 rounded-lg hover:bg-ingenia-oscuro transition"
          >
            Publicar
          </button>
      </div>
    </div>
  </div>
</template>
