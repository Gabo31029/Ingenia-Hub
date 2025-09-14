<template>
  <div class="min-h-screen bg-[#4C8183] flex items-center justify-center p-4">
  <div class="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="flex flex-col lg:flex-row min-h-[600px]">
        <!-- Panel izquierdo -->
  <div class="lg:w-1/2 bg-[#4C8183] p-8 lg:p-12 text-white flex flex-col justify-center rounded-l-2xl">
          <div class="mb-8">
            <div class="flex flex-col items-start mb-0">
              <div class="mb-4" style="margin-top:-12px;">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="10" width="10" height="40" rx="3" fill="#5B9F9F"/>
                  <rect x="26" y="10" width="10" height="40" rx="3" fill="#5B9F9F"/>
                  <rect x="40" y="10" width="10" height="40" rx="3" fill="#5B9F9F" transform="rotate(-15 45 30)"/>
                </svg>
              </div>
              <h1 class="font-poppins text-3xl font-semibold text-white mb-2 text-left">Únete a Ingenia HUB</h1>
            </div>
            <p class="font-inter text-white/90 text-base lg:text-lg leading-relaxed mb-12 text-left">
              Crea tu cuenta gratuita y comienza a formar parte de una comunidad de profesionales comprometidos con la innovación y el desarrollo de proyectos colaborativos.
            </p>
          </div>

          <!-- Características -->
          <div class="space-y-6">
            <div class="bg-[#5B9F9F] rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="3" fill="#316878"/>
                  <rect x="7" y="7" width="10" height="10" rx="2" fill="#fff"/>
                  <line x1="9" y1="10" x2="15" y2="10" stroke="#316878" stroke-width="1.2"/>
                  <line x1="9" y1="13" x2="15" y2="13" stroke="#316878" stroke-width="1.2"/>
                  <line x1="9" y1="16" x2="15" y2="16" stroke="#316878" stroke-width="1.2"/>
                  <rect x="6" y="4" width="1.5" height="16" rx="0.75" fill="#B6D9DB"/>
                </svg>
              </div>
              <div class="text-left">
                <h3 class="font-poppins font-semibold text-[#110A16] mb-1 text-left">Lanza proyectos</h3>
                <p class="font-inter text-[#110A16] text-sm text-left">Transforma tus ideas en proyectos con equipos multidisciplinarios</p>
              </div>
            </div>
            <div class="bg-[#5B9F9F] rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="10" r="4" fill="#316878"/>
                  <rect x="7" y="16" width="10" height="4" rx="2" fill="#316878"/>
                </svg>
              </div>
              <div class="text-left">
                <h3 class="font-poppins font-semibold text-[#110A16] mb-1 text-left">Red profesional</h3>
                <p class="font-inter text-[#110A16] text-sm text-left">Conecta con profesionales y expande tu red</p>
              </div>
            </div>
            <div class="bg-[#5B9F9F] rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-[#316878]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <div class="text-left">
                <h3 class="font-poppins font-semibold text-[#110A16] mb-1 text-left">Comunidad activa</h3>
                <p class="font-inter text-[#110A16] text-sm text-left">Únete a una comunidad que apoya el crecimiento y la innovación</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel derecho -->
        <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div class="w-full max-w-md mx-auto font-inter">
            <div class="mb-8">
              <div class="flex flex-col items-start">
                <h2 class="font-poppins text-2xl lg:text-3xl font-semibold mb-2 text-left" style="color: #316878;">
                  Registrarse
                </h2>
                <p class="font-inter text-left" style="color: #110A16;">
                  Completa los siguientes datos para crear tu cuenta
                </p>
              </div>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Nombre y Apellido -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="nombre" class="block font-inter font-medium text-[#000] mb-2 text-left">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    v-model="form.nombre"
                    type="text"
                    required
                    placeholder="Nombre"
                    class="w-full px-4 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter placeholder-[#B6B6B4] text-[#000]"
                  />
                </div>
                <div>
                  <label for="apellido" class="block font-inter font-medium text-[#000] mb-2 text-left">
                    Apellido
                  </label>
                  <input
                    id="apellido"
                    v-model="form.apellido"
                    type="text"
                    required
                    placeholder="Apellido"
                    class="w-full px-4 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter placeholder-[#B6B6B4] text-[#000]"
                  />
                </div>
              </div>

              <!-- Correo electrónico -->
              <div>
                <label for="email" class="block font-inter font-medium text-[#000] mb-2 text-left">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  class="w-full px-4 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter placeholder-[#B6B6B4] text-[#000]"
                />
              </div>

              <!-- Rol -->
              <div>
                <label for="rol" class="block font-inter font-medium text-[#000] mb-2 text-left">
                  Rol
                </label>
                <select
                  id="rol"
                  v-model="form.rol"
                  required
                  class="w-full px-4 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter appearance-none cursor-pointer placeholder-[#B6B6B4] text-[#000]"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="estudiante">Estudiante</option>
                  <option value="investigador">Investigador</option>
                  <option value="profesor">Profesor</option>
                  <option value="centro-estudiantes">Centro de estudiantes</option>
                </select>
              </div>

              <!-- Contraseña -->
              <div class="relative">
                <label for="password" class="block font-inter font-medium text-[#000] mb-2 text-left">
                  Contraseña
                </label>
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter placeholder-[#B6B6B4] text-[#000] pr-12"
                />
                <span
                  class="absolute right-3 top-2/3 -translate-y-1/3 cursor-pointer select-none"
                  @click="showPassword = !showPassword"
                  tabindex="0"
                  role="button"
                >
                  <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#316878" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="#316878" stroke-width="2"/></svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#316878" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="#316878" stroke-width="2"/><line x1="4" y1="4" x2="20" y2="20" stroke="#316878" stroke-width="2"/></svg>
                </span>
              </div>

              <!-- Fecha de nacimiento -->
              <div>
                <label class="block font-inter font-medium text-[#000] mb-2 text-left">
                  Fecha de nacimiento
                </label>
                <div class="grid grid-cols-3 gap-3">
                  <select
                    v-model="form.dia"
                    required
                    class="px-3 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter appearance-none cursor-pointer placeholder-[#B6B6B4] text-[#000]"
                  >
                    <option value="" disabled>Día</option>
                    <option v-for="day in 31" :key="day" :value="day">{{ day }}</option>
                  </select>
                  <select
                    v-model="form.mes"
                    required
                    class="px-3 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter appearance-none cursor-pointer placeholder-[#B6B6B4] text-[#000]"
                  >
                    <option value="" disabled>Mes</option>
                    <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
                  </select>
                  <select
                    v-model="form.año"
                    required
                    class="px-3 py-3 bg-[#F3F3F5] rounded-lg border border-[#C4BFBF] focus:border-[#316878] focus:outline-none focus:ring-2 focus:ring-[#316878]/20 transition-all duration-200 font-inter appearance-none cursor-pointer placeholder-[#B6B6B4] text-[#000]"
                  >
                    <option value="" disabled>Año</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>

              <!-- Género -->
              <div>
                <label class="block font-inter font-medium text-[#000] mb-3 text-left">
                  Género
                </label>
                <div class="flex gap-6">
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="form.genero"
                      type="radio"
                      value="mujer"
                      class="w-4 h-4 border border-gray-400 bg-white appearance-none rounded-full checked:bg-[#316878] checked:border-[#316878] transition duration-150 ease-in-out"
                      style="box-shadow: 0 0 0 1px #888;"
                    />
                    <span class="ml-3 font-inter text-[#000]">Mujer</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="form.genero"
                      type="radio"
                      value="hombre"
                      class="w-4 h-4 border border-gray-400 bg-white appearance-none rounded-full checked:bg-[#316878] checked:border-[#316878] transition duration-150 ease-in-out"
                      style="box-shadow: 0 0 0 1px #888;"
                    />
                    <span class="ml-3 font-inter text-[#000]">Hombre</span>
                  </label>
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="form.genero"
                      type="radio"
                      value="no-especificar"
                      class="w-4 h-4 border border-gray-400 bg-white appearance-none rounded-full checked:bg-[#316878] checked:border-[#316878] transition duration-150 ease-in-out"
                      style="box-shadow: 0 0 0 1px #888;"
                    />
                    <span class="ml-3 font-inter text-[#000]">Prefiero no especificar</span>
                  </label>
                </div>
              </div>

              <!-- Botón de registro -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-3 px-4 bg-[#316878] hover:bg-[#24505a] text-[#fff] rounded-lg transition-colors duration-200 font-inter font-medium focus:outline-none focus:ring-2 focus:ring-[#316878]/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isLoading">Registrando...</span>
                <span v-else>Registrarse</span>
              </button>

              <!-- Link para login -->
              <div class="text-center">
                <p class="font-inter text-[#000]">
                  ¿Ya tienes cuenta?
                  <span
                    class="text-[#316878] hover:text-[#24505a] font-medium transition-colors duration-200 cursor-pointer ml-1 focus:outline-none focus:underline"
                    @click="goToLogin"
                    tabindex="0"
                    role="button"
                  >
                    Iniciar sesión
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showPassword = ref(false)
import { useRouter } from 'vue-router'

const router = useRouter()


const form = ref({
  nombre: '',
  apellido: '',
  email: '',
  rol: '',
  password: '',
  dia: '',
  mes: '',
  año: '',
  genero: ''
})

const isLoading = ref(false)


const months = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
]

const years = computed(() => {
  const startYear = 1925;
  const endYear = 2025;
  const yearArray = [];
  for (let year = endYear; year >= startYear; year--) {
    yearArray.push(year);
  }
  return yearArray;
})


const handleSubmit = async () => {
  isLoading.value = true
  
  try {
    
    console.log('Datos del formulario:', form.value)
    
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('¡Registro exitoso! Bienvenido a Ingenia HUB')
    
    
    form.value = {
      nombre: '',
      apellido: '',
      email: '',
      rol: '',
      password: '',
      dia: '',
      mes: '',
      año: '',
      genero: ''
    }
  } catch (error) {
    console.error('Error en el registro:', error)
    alert('Error en el registro. Por favor, inténtalo de nuevo.')
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  router.push({ name: 'Login' })
}
</script>