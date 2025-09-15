<script setup>
import { ref } from "vue";

const skills = ref(
  "Desarrollador Full Stack especializado en tecnologías web modernas. Experiencia sólida en JavaScript, Python, React y Node.js. Conocimientos avanzados en bases de datos relacionales y NoSQL. Apasionado por la inteligencia artificial y machine learning."
);

const isEditing = ref(false);

function toggleEdit() {
  isEditing.value = !isEditing.value;
}

function viewAllProjects() {
  alert("Redirigiendo al historial completo de proyectos...");
}
</script>

<template>
  <div class="max-w-[1300px] mx-auto p-5">
    <!-- LAYOUT GRID -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-5">
      <!-- Columna Izquierda -->
      <div class="flex flex-col gap-5">
        <!-- PERFIL HEADER -->
        <div
          class="bg-white rounded-xl p-5 shadow-md flex items-center gap-5 
                 opacity-0 translate-y-5 animate-fadeInUp"
        >
          <div class="w-20 h-20 rounded-full bg-[#316878] flex items-center justify-center text-white text-2xl font-bold">
            JP
          </div>
          <div class="flex-1">
            <h1 class="text-xl font-bold">Juan Pérez Rodríguez</h1>
            <p class="text-sm text-gray-600 mb-2">Estudiante de Ingeniería de Sistemas</p>
            <div class="flex flex-wrap gap-5">
              <div class="text-center">
                <span class="block text-base font-bold text-[#316878]">24</span>
                <span class="text-xs text-gray-500">Proyectos</span>
              </div>
              <div class="text-center">
                <span class="block text-base font-bold text-[#316878]">156</span>
                <span class="text-xs text-gray-500">Seguidores</span>
              </div>
              <div class="text-center">
                <span class="block text-base font-bold text-[#316878]">89</span>
                <span class="text-xs text-gray-500">Siguiendo</span>
              </div>
              <div class="text-center">
                <span class="block text-base font-bold text-[#316878]">4.8</span>
                <span class="text-xs text-gray-500">Rating</span>
              </div>
            </div>
          </div>
        </div>

        <!-- INFORMACIÓN PERSONAL -->
        <div
          class="bg-white rounded-xl p-5 shadow-md opacity-0 translate-y-5 animate-fadeInUp [animation-delay:0.2s]"
        >
          <h3 class="text-lg font-semibold mb-4">Información Personal</h3>
          <div class="flex flex-col gap-2 text-sm text-gray-700">
            <div>📧 juan.perez@universidad.edu</div>
            <div>🎓 Ingeniería de Sistemas</div>
            <div>📚 7mo Ciclo</div>
            <div>🏛️ Universidad Nacional</div>
            <div>📍 Lima, Perú</div>
            <div>📅 Enero 2023</div>
          </div>
        </div>
      </div>

      <!-- Columna Central -->
      <div class="flex flex-col gap-5">
        <div
          class="bg-white rounded-xl p-5 shadow-md opacity-0 translate-y-5 animate-fadeInUp [animation-delay:0.4s]"
        >
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Mis Proyectos</h2>
            <button
              class="bg-[#316878] text-white rounded-lg px-3 py-1 text-sm"
              @click="viewAllProjects"
            >
              Ver Historial Completo
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(p, i) in [
                { title: 'Sistema de Gestión Universitaria', desc: 'Plataforma web completa para gestión integral...', tech: ['React','Node.js','MongoDB'], time:'Hace 2 semanas' },
                { title: 'App de Monitoreo IoT', desc: 'Aplicación móvil y web para sensores IoT en tiempo real.', tech: ['Flutter','Firebase','Arduino'], time:'Hace 1 mes' },
                { title: 'Chatbot de Asistencia Académica', desc: 'Bot inteligente con PLN.', tech: ['Python','TensorFlow'], time:'Hace 3 meses' },
                { title: 'Plataforma E-Learning Adaptativo', desc: 'Sistema de aprendizaje personalizado en tiempo real.', tech: ['Vue.js','Node.js','MySQL'], time:'Hace 2 meses' },
              ]"
              :key="i"
              class="border border-gray-200 rounded-lg p-4 opacity-0 translate-y-5 animate-fadeInUp"
              :class="`[animation-delay:${0.6 + i * 0.2}s]`"
            >
              <h3 class="text-base font-semibold mb-2">{{ p.title }}</h3>
              <p class="text-sm text-gray-600 mb-3">{{ p.desc }}</p>
              <div class="flex justify-between text-xs text-gray-500">
                <div class="flex gap-2 flex-wrap">
                  <span
                    v-for="(t, j) in p.tech"
                    :key="j"
                    class="bg-[#eaf3f3] text-[#316878] px-2 py-1 rounded-full text-xs"
                  >
                    {{ t }}
                  </span>
                </div>
                <span>{{ p.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Columna Derecha -->
      <div class="flex flex-col gap-5">
        <!-- CONTACTOS -->
        <div
          class="bg-white rounded-xl p-5 shadow-md opacity-0 translate-y-5 animate-fadeInUp [animation-delay:0.8s]"
        >
          <h3 class="text-lg font-semibold mb-4">Contactos</h3>
          <div class="flex flex-col gap-3">
            <div
              v-for="c in [
                { avatar: 'AR', name: 'Ana Rodríguez Cruz', role: 'GERENCIA' },
                { avatar: 'DM', name: 'David Martínez Vega', role: 'COLABORADOR' },
                { avatar: 'LS', name: 'Laura Sánchez Torres', role: 'MENTORA' }
              ]"
              :key="c.avatar"
              class="flex items-center gap-3"
            >
              <div class="w-9 h-9 rounded-full bg-[#316878] text-white flex items-center justify-center font-bold">
                {{ c.avatar }}
              </div>
              <div class="text-sm">
                <div class="font-medium">{{ c.name }}</div>
                <div class="text-xs text-gray-600">{{ c.role }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- SKILLS -->
        <div
          class="bg-white rounded-xl p-5 shadow-md opacity-0 translate-y-5 animate-fadeInUp [animation-delay:1s]"
        >
          <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-semibold">Habilidades</h3>
            <button
              class="text-sm bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200"
              @click="toggleEdit"
            >
              {{ isEditing ? "💾 Guardar" : "✏️ Editar" }}
            </button>
          </div>
          <textarea
            class="w-full h-20 border border-gray-200 rounded-md p-2 text-sm mb-4 resize-none"
            v-model="skills"
            :readonly="!isEditing"
          ></textarea>

          <h3 class="text-md font-medium mb-2">Áreas de Interés</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in [
                'Desarrollo Web','Inteligencia Artificial','Machine Learning','Cloud Computing',
                'Desarrollo Móvil','DevOps','Ciberseguridad','Blockchain','UI/UX Design','API REST'
              ]"
              :key="tag"
              class="bg-[#eaf3f3] text-[#316878] px-3 py-1 rounded-full text-xs"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
</style>
