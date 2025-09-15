<script setup>
import CardFeed from "../components/CardFeedPrincipal.vue";
import CrearPublicaciónFeed from "../components/CrearPublicacionFeed.vue";
import CardSugerenciasFeed from "../components/CardSugerenciasFeed.vue";
import CardTendencia from "../components/CardTendencia.vue";
import CardProyectoDestacado from "../components/ProyectoDestacado.vue";

const proyectos = [
  {
    id: 1,
    titulo: 'TaskFlow Pro',
    descripcion: 'Aplicación de gestión de proyectos con colaboración en tiempo real y IA...',
    estrellas: 127,
    imagen: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1170&q=80',
    tecnologia: 'React',
  },
  {
    id: 2,
    titulo: 'DataViz Dashboard',
    descripcion: 'Dashboard interactivo para análisis de datos con visualizaciones dinámicas.',
    estrellas: 89,
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1170&q=80', 
    tecnologia: 'D3.js',
  },
]
const tendencias = [
  { id: 1, titulo: "#VueJS", posts: 1240 },
  { id: 2, titulo: "#TailwindCSS", posts: 980 },
  { id: 3, titulo: "#OpenAI", posts: 760 },
  { id: 4, titulo: "#IngeniaApp", posts: 430 },
];
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

// Array de sugerencias
const sugerencias = [
  {
    id: 1,
    imgUser: "https://randomuser.me/api/portraits/men/76.jpg",
    username: "Juan Pérez",
    arroba: "@juanperez",
    followers: 250,
  },
  {
    id: 2,
    imgUser: "https://randomuser.me/api/portraits/women/34.jpg",
    username: "Ana Torres",
    arroba: "@anatorres",
    followers: 540,
  },
  {
    id: 3,
    imgUser: "https://randomuser.me/api/portraits/men/54.jpg",
    username: "Luis Gómez",
    arroba: "@luisgomez",
    followers: 120,
  },
  {
    id: 4,
    imgUser: "https://randomuser.me/api/portraits/women/67.jpg",
    username: "Sofía Ramírez",
    arroba: "@sofiaramirez",
    followers: 890,
  },
];
console.log(sugerencias);
</script>

<template>
  <div
    class="flex justify-center lg:grid lg:grid-cols-[4fr_5fr] xl:grid-cols-3 sm:bg-[#F4F2EE]"
  >
    <!-- Columna Izquierda: Tendencias y Sugerencias -->
    <div
      class="hidden lg:flex flex-col items-end border-gray-300 my-3 sm:my-6 pr-4"
    >
      <div class="flex flex-col gap-4 max-w-xs">
        <!-- Tendencias -->
<div class="bg-white w-full p-4 rounded-lg shadow-md ">
  <h3 class="font-semibold text-fluid-md mb-2">Tendencias</h3>
  <hr class="mb-4" />
  <CardTendencia
    v-for="t in tendencias"
    :key="t.id"
    :titulo="t.titulo"
    :posts="t.posts"
  />
  <button
    class="mt-3 text-white text-sm font-medium bg-ingenia-primario px-3 py-1.5 rounded-lg transition text-center mx-auto block"
  >
    Ver más
  </button>
</div>


        <!-- Sugerencias -->
        <div class="bg-white w-full p-4 rounded-lg shadow-md">
          <h3 class="font-semibold text-fluid-md mb-2">Sugerencias para ti</h3>
          <hr class="mb-4" />
          <CardSugerenciasFeed
            v-for="s in sugerencias"
            :key="s.id"
            :imgUser="s.imgUser"
            :username="s.username"
            :arroba="s.arroba"
            :followers="s.followers"
          />
        </div>
      </div>
    </div>

    <!-- Columna 2: Posts -->
    <div class="flex justify-center md:flex-start xl:justify-center">
      <div
        class="flex flex-col items-center self-center gap-3 my-3 sm:my-6 max-w-lg w-full col-span-1 sm:col-span-1"
      >
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

    <!-- Columna 3: espacio vacío (para centrar posts en pantallas grandes) -->
    <div class="hidden xl:block xl:col-span-1 my-6 pl-4">
      <div class="flex flex-col gap-4 max-w-xs">

          <!-- Proyectos destacados -->
<div class="bg-white w-full p-4 rounded-lg shadow-md">
    <h3 class="font-semibold text-fluid-md mb-2">Proyectos destacados</h3>
    <hr class="mb-4" />
    
    <div class="grid grid-cols-1 gap-4">
      <CardProyectoDestacado
        v-for="p in proyectos"
        :key="p.id"
        :titulo="p.titulo"
        :descripcion="p.descripcion"
        :estrellas="p.estrellas"
        :imagen="p.imagen"
        :tecnologia="p.tecnologia"
      />
    </div>

    <button
      class="mt-3 text-white text-sm font-medium bg-ingenia-primario px-3 py-1.5 rounded-lg transition text-center mx-auto block"
    >
      Ver más
    </button>
  </div>
      </div>
    </div>
  </div>
</template>
