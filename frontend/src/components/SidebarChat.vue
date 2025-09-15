<script setup>
import ConversationItem from "./Mensaje.vue";

const conversations = [
  {
    id: 1,
    name: "María García Ruiz",
    lastMsg: "¿Podrías ayudarme con el proyecto de bas...",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Carlos López Silva",
    lastMsg: "Perfecto, nos vemos en el laboratorio",
    time: "9:15 AM",
    unread: 0,
  },
  {
    id: 3,
    name: "Grupo Proyecto IA",
    lastMsg: "Ana: He subido los últimos cambios...",
    time: "Ayer",
    unread: 5,
  },
  {
    id: 4,
    name: "Dr. Roberto Mendez",
    lastMsg: "Excelente trabajo en la presentación",
    time: "Ayer",
    unread: 0,
  },
  {
    id: 5,
    name: "Laura Sánchez Torres",
    lastMsg: "¿Tienes tiempo para revisar mi código?",
    time: "2 días",
    unread: 0,
  },
  {
    id: 6,
    name: "Equipo DevOps",
    lastMsg: "Deployment completado exitosamente",
    time: "3 días",
    unread: 0,
  },
];
</script>
<template>
  <div class="flex flex-col h-full bg-white">
    <div class="p-2 sm:p-4">
      <input
        type="text"
        placeholder="Buscar..."
        class="w-full rounded-md border px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
      />
    </div>

    <div class="flex-1 overflow-y-auto">
      <ConversationItem
        v-for="c in conversations"
        :key="c.id"
        :conversation="c"
        :active="c.id === 1"
        @click="$emit('openChat')"
      />
    </div>
  </div>
</template>


