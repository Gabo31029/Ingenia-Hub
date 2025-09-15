<script setup>
const props = defineProps({
  imgUser: { type: String, default: "" },
  username: { type: String, default: "Usuario" },
  followers: { type: Number, default: 100 },
  arroba: { type: String, default: "@user" },
});

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
</svg>`;
</script>

<template>
  <div class="hidden md:flex w-full items-center justify-between gap-4 px-4 py-2">
    <!-- Avatar -->
    <div class="flex-shrink-0">
      <span v-if="imgUser === ''" v-html="user" class="w-10 h-10 block"></span>
      <img
        v-else
        :src="imgUser"
        alt="User Avatar"
        class="w-10 h-10 rounded-full object-cover"
      />
    </div>

    <!-- Datos del usuario -->
    <div class="flex flex-col flex-1 min-w-0">
      <h4 class="font-semibold text-fluid-md truncate">
        {{ username }}
      </h4>
      <span class="text-gray-600 text-fluid-sm truncate">
        {{ arroba }}
      </span>
      <span class="text-gray-600 text-fluid-sm">
        {{ followers }} seguidores
      </span>
    </div>

    <!-- Botón seguir -->
    <div class="flex-shrink-0">
      <button
        class="font-bold bg-ingenia-primario text-white text-xs px-3 py-1.5 rounded-lg hover:bg-ingenia-oscuro transition"
      >
        Seguir
      </button>
    </div>
  </div>
</template>
