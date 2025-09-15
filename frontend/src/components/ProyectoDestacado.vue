<script setup>
defineProps({
  titulo: String,
  descripcion: String,
  estrellas: Number,
  imagen: String,
  tecnologia: String,
})
</script>

<template>
  <div class="relative bg-white p-0 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
    <!-- Imagen con badge -->
    <div class="relative">
      <img :src="imagen" alt="Imagen del proyecto" class="w-full h-32 object-cover" />
      <span class="absolute top-2 right-2 bg-cyan-700 text-white text-xs px-2 py-0.5 rounded">
        {{ tecnologia }}
      </span>
    </div>

    <!-- Contenido del proyecto -->
    <div class="p-4">
      <h4 class="font-semibold text-gray-800 text-sm mb-1">{{ titulo }}</h4>
      <p class="text-gray-600 text-xs mb-6 truncate">{{ descripcion }}</p>

      <!-- Estrellas y enlace -->
      <div class="absolute bottom-3 left-4 flex items-center gap-1 text-yellow-500 text-sm font-medium">
        ⭐ {{ estrellas }}
      </div>

      <div class="absolute bottom-3 right-4">
        <span
          class="text-ingenia-primario text-xs font-medium cursor-pointer hover:underline"
        >
          Ver noticia →
        </span>
      </div>
    </div>
  </div>
</template>
