<script setup>
import MessageBubble from './BurbujaMensaje.vue'

const messages = [
  { from: 'other', text: 'Hola Juan, ¿cómo estás? Espero que todo vaya bien con tus proyectos.', time: '9:45 AM' },
  { from: 'me', text: '¡Hola María! Todo bien por acá, gracias por preguntar. ¿En qué te puedo ayudar?', time: '9:47 AM' },
  { from: 'other', text: 'Tengo algunas dudas con el diseño de base de datos para mi proyecto final. ¿Podrías ayudarme a revisar el modelo entidad-relación?', time: '9:48 AM' },
  { from: 'me', text: '¡Por supuesto! Me encanta ayudar con bases de datos. ¿Puedes compartir el diagrama que tienes hasta ahora?', time: '9:50 AM' },
  { from: 'other', text: '¡Perfecto! Te envío el archivo por email. Es un sistema para gestión de bibliotecas universitarias.', time: '10:15 AM' },
  { from: 'me', text: 'Excelente tema. Ya revisé el diagrama y tengo algunas sugerencias para optimizar las relaciones. ¿Te parece si nos reunimos en el laboratorio mañana?', time: '10:20 AM' },
]
</script>
<template>
  <div class="flex flex-col h-full">
    <div class="flex items-center justify-between border-b p-2 sm:p-4 bg-white">
      <button
        @click="$emit('back')"
        class="lg:hidden text-ingenia-primario font-semibold text-sm"
      >
        ←
      </button>
      <div>
        <h2 class="font-semibold text-sm sm:text-base">María García Ruiz</h2>
        <p class="text-xs sm:text-sm text-green-600">Conectada</p>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3 bg-white">
      <MessageBubble
        v-for="(msg, i) in messages"
        :key="i"
        :message="msg"
      />
    </div>

    <div class="p-2 sm:p-4 border-t">
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        class="w-full rounded-full border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
      />
    </div>
  </div>
</template>

