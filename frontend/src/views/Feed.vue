<script setup>
import CardFeed from "../components/CardFeedPrincipal.vue";
import CrearPublicaciónFeed from "../components/CrearPublicaciónFeed.vue";

const posts = [
  {
    id: 1,
    titulo: "Gabriel Martínez",
    descripcion: "Publicado el 12 de septiembre, 2025",
    contenido:
      "Hoy fue un gran día, logré terminar mi proyecto personal después de varias semanas de esfuerzo 💻✨. ¡Nada mejor que compartirlo con ustedes!",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1170&q=80",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    titulo: "María López",
    descripcion: "Publicado ayer",
    contenido:
      "El atardecer de ayer me recordó lo importante que es parar un momento y disfrutar de lo simple 🌅💛.",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1170&q=80",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    titulo: "Carlos Fernández",
    descripcion: "Publicado hace 3 horas",
    contenido:
      "Estoy probando nuevas recetas en casa 👨‍🍳🍝. ¿Quién se apunta para la próxima cena?",
    mediaType: "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    titulo: "Laura Sánchez",
    descripcion: "Publicado hace 15 minutos",
    contenido:
      "Una caminata rápida antes de empezar el día 🌿🚶‍♀️. ¡La naturaleza siempre da energía extra!",
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1170&q=80",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];
</script>

<template>
  <div class="flex justify-center sm:bg-[#F4F2EE]">
    <div class="flex flex-col items-center gap-3 my-3 sm:my-6 max-w-lg w-full">
        <CrearPublicaciónFeed />
        <CardFeed
        v-for="post in posts"
        :key="post.id"
        :titulo="post.titulo"
        :descripcion="post.descripcion"
        :contenido="post.contenido"
        :media-type="post.mediaType"
        :media-url="post.mediaUrl"
        :userImg="post.avatar"
      />
    </div>
  </div>
</template>
