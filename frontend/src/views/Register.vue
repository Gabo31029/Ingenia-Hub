<template>
  <div class="fixed inset-0 bg-[#4C8183] flex items-center justify-center">
    <div
      class="w-full h-full bg-white lg:rounded-2xl shadow-xl overflow-hidden"
    >
      <div class="flex flex-col lg:flex-row h-full">
        <!-- LADO IZQUIERDO -->
        <div
          class="lg:w-1/2 bg-[#4C8183] p-6 lg:p-10 text-white flex flex-col justify-center"
        >
          <div class="mb-8">
            <div class="flex flex-col items-start mb-4">
              <!-- LOGO ORIGINAL -->
              <div class="mb-4">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="12"
                    y="10"
                    width="10"
                    height="40"
                    rx="3"
                    fill="#5B9F9F"
                  />
                  <rect
                    x="26"
                    y="10"
                    width="10"
                    height="40"
                    rx="3"
                    fill="#5B9F9F"
                  />
                  <rect
                    x="40"
                    y="10"
                    width="10"
                    height="40"
                    rx="3"
                    fill="#5B9F9F"
                    transform="rotate(-15 45 30)"
                  />
                </svg>
              </div>
              <h1
                class="font-poppins font-bold text-white text-3xl lg:text-4xl leading-tight"
              >
                Únete a Ingenia HUB
              </h1>
            </div>
            <p
              class="font-inter text-white/90 text-lg lg:text-xl leading-relaxed"
            >
              Crea tu cuenta gratuita y comienza a formar parte de una comunidad
              de profesionales comprometidos con la innovación y el desarrollo
              de proyectos colaborativos.
            </p>
          </div>

          <!-- CARDS -->
          <div class="space-y-6">
            <div
              class="bg-[#5B9F9F] rounded-xl p-3 flex items-center gap-3 max-w-lg"
            >
              <div
                class="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center"
              >
                <!-- ICONO 1 -->
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="3"
                    fill="#316878"
                  />
                  <rect x="7" y="7" width="10" height="10" rx="2" fill="#fff" />
                  <line
                    x1="9"
                    y1="10"
                    x2="15"
                    y2="10"
                    stroke="#316878"
                    stroke-width="1.2"
                  />
                  <line
                    x1="9"
                    y1="13"
                    x2="15"
                    y2="13"
                    stroke="#316878"
                    stroke-width="1.2"
                  />
                  <line
                    x1="9"
                    y1="16"
                    x2="15"
                    y2="16"
                    stroke="#316878"
                    stroke-width="1.2"
                  />
                  <rect
                    x="6"
                    y="4"
                    width="1.5"
                    height="16"
                    rx="0.75"
                    fill="#B6D9DB"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-poppins font-semibold text-[#110A16] text-lg">
                  Lanza proyectos
                </h3>
                <p class="font-inter text-[#110A16] text-sm">
                  Transforma tus ideas en proyectos con equipos
                  multidisciplinarios.
                </p>
              </div>
            </div>

            <div
              class="bg-[#5B9F9F] rounded-xl p-3 flex items-center gap-3 max-w-lg"
            >
              <div
                class="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center"
              >
                <!-- ICONO 2 -->
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="10" r="4" fill="#316878" />
                  <rect
                    x="7"
                    y="16"
                    width="10"
                    height="4"
                    rx="2"
                    fill="#316878"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-poppins font-semibold text-[#110A16] text-lg">
                  Red profesional
                </h3>
                <p class="font-inter text-[#110A16] text-sm">
                  Conecta con profesionales y expande tu red.
                </p>
              </div>
            </div>

            <div
              class="bg-[#5B9F9F] rounded-xl p-3 flex items-center gap-3 max-w-lg"
            >
              <div
                class="w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center"
              >
                <!-- ICONO 3 -->
                <svg
                  class="w-6 h-6 text-[#316878]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-poppins font-semibold text-[#110A16] text-lg">
                  Comunidad activa
                </h3>
                <p class="font-inter text-[#110A16] text-sm">
                  Únete a una comunidad que apoya el crecimiento y la
                  innovación.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- LADO DERECHO (FORMULARIO) -->
        <div
          class="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center items-center overflow-y-auto"
        >
          <div class="w-full max-w-md font-inter">
            <div class="mb-6 text-center">
              <h2
                class="font-poppins text-2xl lg:text-3xl font-semibold mb-2 text-[#316878]"
              >
                Registrarse
              </h2>
              <p class="font-inter text-sm lg:text-base text-[#110A16]">
                Completa los siguientes datos para crear tu cuenta
              </p>
            </div>

            <!-- FORMULARIO -->
            <form
              @submit.prevent="handleSubmit"
              class="space-y-2 text-xs lg:text-sm"
            >
              <!-- Nombre y apellido -->
              <div class="grid grid-cols-2 gap-2">
                <input
                  v-model="form.nombre"
                  placeholder="Nombre"
                  class="px-2 py-2 rounded-lg border w-full text-xs lg:text-sm"
                  required
                />
                <input
                  v-model="form.apellido"
                  placeholder="Apellido"
                  class="px-2 py-2 rounded-lg border w-full text-xs lg:text-sm"
                  required
                />
              </div>

              <!-- Email -->
              <input
                v-model="form.email"
                type="email"
                placeholder="Correo electrónico"
                class="w-full px-2 py-2 rounded-lg border text-xs lg:text-sm"
                required
              />

              <!-- Rol -->
              <select
                v-model="form.rol"
                required
                class="w-full px-2 py-2 rounded-lg border text-xs lg:text-sm"
              >
                <option disabled value="">Selecciona un rol</option>
                <option value="estudiante">Estudiante</option>
                <option value="investigador">Investigador</option>
                <option value="profesor">Profesor</option>
                <option value="centro-estudiantes">
                  Centro de estudiantes
                </option>
              </select>

              <!-- Password -->
              <input
                v-model="form.password"
                type="password"
                placeholder="Contraseña"
                class="w-full px-2 py-2 rounded-lg border text-xs lg:text-sm"
                required
              />

              <!-- Fecha de nacimiento -->
              <div class="grid grid-cols-3 gap-2">
                <select
                  v-model="form.dia"
                  required
                  class="px-2 py-2 rounded-lg border text-xs lg:text-sm"
                >
                  <option value="" disabled>Día</option>
                  <option v-for="day in 31" :key="day" :value="day">
                    {{ day }}
                  </option>
                </select>
                <select
                  v-model="form.mes"
                  required
                  class="px-2 py-2 rounded-lg border text-xs lg:text-sm"
                >
                  <option value="" disabled>Mes</option>
                  <option
                    v-for="(month, index) in months"
                    :key="index"
                    :value="index + 1"
                  >
                    {{ month }}
                  </option>
                </select>
                <select
                  v-model="form.año"
                  required
                  class="px-2 py-2 rounded-lg border text-xs lg:text-sm"
                >
                  <option value="" disabled>Año</option>
                  <option v-for="year in years" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>

              <!-- Género -->
              <div class="flex gap-3">
                <label class="flex items-center gap-1 cursor-pointer text-xs">
                  <input
                    v-model="form.genero"
                    type="radio"
                    value="mujer"
                    class="w-3 h-3"
                  />
                  Mujer
                </label>
                <label class="flex items-center gap-1 cursor-pointer text-xs">
                  <input
                    v-model="form.genero"
                    type="radio"
                    value="hombre"
                    class="w-3 h-3"
                  />
                  Hombre
                </label>
                <label class="flex items-center gap-1 cursor-pointer text-xs">
                  <input
                    v-model="form.genero"
                    type="radio"
                    value="no-especificar"
                    class="w-3 h-3"
                  />
                  No especificar
                </label>
              </div>

              <!-- Botón -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-2 bg-[#316878] text-white rounded-lg text-sm hover:bg-[#24505a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isLoading">Registrando...</span>
                <span v-else>Registrarse</span>
              </button>

              <!-- Ir a login -->
              <div class="text-center">
                <p class="text-xs text-[#000]">
                  ¿Ya tienes cuenta?
                  <span
                    @click="goToLogin"
                    class="text-[#316878] hover:text-[#24505a] font-medium cursor-pointer ml-1 underline"
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
import { ref, computed } from "vue";

const showPassword = ref(false);
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  nombre: "",
  apellido: "",
  email: "",
  rol: "",
  password: "",
  dia: "",
  mes: "",
  año: "",
  genero: "",
});

const isLoading = ref(false);

const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const years = computed(() => {
  const startYear = 1925;
  const endYear = 2025;
  const yearArray = [];
  for (let year = endYear; year >= startYear; year--) {
    yearArray.push(year);
  }
  return yearArray;
});

const handleSubmit = async () => {
  isLoading.value = true;

  try {
    console.log("Datos del formulario:", form.value);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("¡Registro exitoso! Bienvenido a Ingenia HUB");

    form.value = {
      nombre: "",
      apellido: "",
      email: "",
      rol: "",
      password: "",
      dia: "",
      mes: "",
      año: "",
      genero: "",
    };
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("Error en el registro. Por favor, inténtalo de nuevo.");
  } finally {
    isLoading.value = false;
  }
};

const goToLogin = () => {
  router.push({ name: "Login" });
};
</script>
