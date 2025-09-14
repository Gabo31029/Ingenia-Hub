<script setup>
const props = defineProps({
  userImg : { type: String, default: ""},
  titulo: { type: String, default: "Título del Card" },
  descripcion: { type: String, default: "Una pequeña descripción aquí" },
  contenido: {
    type: String,
    default:
      "Aquí va el contenido principal del card. Puede incluir texto, imágenes o cualquier cosa que quieras mostrar.",
  },
  mediaUrl: { type: String, default: "" },
  mediaType: { type: String, default: "" },
});
const acciones = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.25 8C3.25 8.69 2.69 9.25 2 9.25C1.31 9.25 0.75 8.69 0.75 8C0.75 7.31 1.31 6.75 2 6.75C2.69 6.75 3.25 7.31 3.25 8ZM14 6.75C13.31 6.75 12.75 7.31 12.75 8C12.75 8.69 13.31 9.25 14 9.25C14.69 9.25 15.25 8.69 15.25 8C15.25 7.31 14.69 6.75 14 6.75ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z" fill="currentColor"></path>
  </svg>`;
const user = `<svg width=100% height=100% viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_31_35)">
    <path d="M37.8125 24.5625C37.8125 30.2687 33.2062 34.875 27.5 34.875C21.7938 34.875 17.1875 30.2687 17.1875 24.5625C17.1875 18.8563 21.7938 14.25 27.5 14.25C33.2062 14.25 37.8125 18.8563 37.8125 24.5625Z" fill="#642C8C"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M55 28C55 43.1937 42.6937 55.5 27.5 55.5C12.3062 55.5 0 43.1937 0 28C0 12.8062 12.3062 0.5 27.5 0.5C42.6937 0.5 55 12.8062 55 28ZM13.75 47.7656C14.3 46.8512 19.6281 38.3125 27.4656 38.3125C35.2687 38.3125 40.6312 46.8719 41.1812 47.7656C44.3777 45.5553 46.9894 42.6016 48.7917 39.1585C50.5941 35.7155 51.5331 31.8862 51.5281 28C51.5281 14.6969 40.7687 3.9375 27.4656 3.9375C14.1625 3.9375 3.40313 14.6969 3.40313 28C3.40313 36.1813 7.49375 43.4344 13.75 47.7656Z" fill="#642C8C"/>
    </g>
    <defs>
    <clipPath id="clip0_31_35">
    <rect width="55" height="55" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
    </defs>
    </svg>`
</script>

<template>
  <div
    class="bg-white text-card-foreground flex flex-col rounded-xl border max-w-lg w-full"
  >
    <!-- Header -->
    <div
      class="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-3 sm:px-6 pt-6 grid-cols-[1fr_auto] border-b pb-2"
    >
    <div class="flex gap-3 items-center py-1">
      <span v-if="userImg === ''" v-html="user" class="flex w-6  md:w-7"></span>
      <span v-else>
        <img
        :src="userImg"
        alt="User Avatar"
        class="w-10 h-10 rounded-full object-cover"
        /></span>
        <div>
          <h4 class="leading-none font-semibold text-fluid-lg">
            {{ titulo }}
          </h4>
          <span class="text-muted-foreground text-fluid-sm text-gray-600">
            {{ descripcion }}
          </span>
        </div>
      </div>
      <div class="self-start justify-self-end text-sm sm:text-base">
        <button class="text-ingenia-primario" v-html="acciones"></button>
      </div>
    </div>

    <!-- Content -->
    <p class="px-3 md:px-6 pt-3 text-fluid-md font-inter">
      {{ contenido }}
    </p>
    <div v-if="mediaUrl" class="w-full max-h-[400px] overflow-hidden pt-3">
      <!-- Imagen -->
      <img
        v-if="mediaType === 'image'"
        :src="mediaUrl"
        alt="Post media"
        class="w-full object-contain"
      />

      <!-- Video -->
      <video
        v-else-if="mediaType === 'video'"
        :src="mediaUrl"
        controls
        class="w-full object-contain"
      ></video>
    </div>

    <!-- Footer -->
    <div class="grid grid-cols-3 text-center py-2 text-gray-800 text-fluid-sm">
      <div>Me gusta</div>
      <div class="border-x">Comentar</div>
      <div>Compartir</div>
    </div>
  </div>
</template>
