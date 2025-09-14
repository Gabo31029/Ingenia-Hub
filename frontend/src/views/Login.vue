<template>
  <div class="fixed inset-0 bg-[#4C8183] flex items-center justify-center">
    <div class="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white shadow-xl border-0 rounded-2xl">
      <div class="pt-4 pb-2 px-6 sm:px-8 lg:px-10">
        <div class="flex justify-center mb-6">
          <svg width="60" height="60" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="30" height="120" rx="10" fill="#5B9F9F"/>
            <rect x="55" y="20" width="30" height="120" rx="10" fill="#5B9F9F"/>
            <rect x="100" y="20" width="30" height="120" rx="10" fill="#5B9F9F" transform="rotate(-15 115 80)"/>
          </svg>
        </div>
        <div class="text-center space-y-2">
          <h1 class="font-poppins text-xl sm:text-2xl font-semibold text-[#110A16]">
            <span style="color: #316878; font-size:2rem;">Iniciar sesión en Ingenia HUB</span>
          </h1>
          <p class="font-inter text-sm sm:text-base text-gray-600">
            <span style="font-size:1.2rem;">Accede a tu cuenta</span>
          </p>
        </div>
      </div>
      <div class="px-6 sm:px-8 lg:px-10 pb-8">
        <form @submit.prevent="handleSubmit" class="space-y-4 mt-4">
          <div class="space-y-2 text-left">
            <label for="email" class="font-inter text-sm text-[#110A16] block">
              <span style="font-size:1.1rem;">Correo electrónico</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              v-model="email"
              class="font-inter w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 focus:ring-2 focus:ring-[#316878] focus:border-transparent focus:outline-none transition-all duration-200 text-lg"
              style="color: #000;"
              required
            />
          </div>
          <div class="space-y-2 text-left relative">
            <label for="password" class="font-inter text-sm text-[#110A16] block">
              <span style="font-size:1.1rem;">Contraseña</span>
            </label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="font-inter w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 focus:ring-2 focus:ring-[#316878] focus:border-transparent focus:outline-none transition-all duration-200 text-[#110A16] text-lg"
              required
            />
            <span
              class="absolute right-3 top-9 cursor-pointer select-none"
              @click="showPassword = !showPassword"
              tabindex="0"
              role="button"
            >
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#316878" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="#316878" stroke-width="2"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#316878" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="#316878" stroke-width="2"/><line x1="4" y1="4" x2="20" y2="20" stroke="#316878" stroke-width="2"/></svg>
            </span>
          </div>
          <button
            type="submit"
            class="w-full h-12 bg-[#316878] hover:bg-[#2a5a68] text-white font-inter font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#316878] focus:ring-offset-2 text-lg"
          >
            Iniciar Sesión
          </button>
        </form>
        <div class="mt-4 text-center">
          <span
            class="font-inter text-lg text-[#5B9F9F] hover:text-[#316878] transition-colors duration-200 cursor-pointer focus:outline-none focus:underline"
            @click="handleForgotPassword"
            tabindex="0"
            role="button"
          >
            ¿Olvidaste tu contraseña?
          </span>
        </div>
        <div class="mt-4 flex items-center">
          <div class="flex-1 border-t border-gray-200"></div>
          <span class="px-4 text-base text-gray-500 font-inter">o</span>
          <div class="flex-1 border-t border-gray-200"></div>
        </div>
        <button
          type="button"
          @click="handleGoogleLogin"
          class="w-full h-12 mt-4 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-inter font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span style="font-size:1.15rem;">Continuar con Google</span>
        </button>
        <div class="mt-8 text-center">
          <p class="font-inter text-lg text-gray-600">
            <span style="font-size:1.1rem;">¿No tienes cuenta?</span>
            <span
              class="text-[#5B9F9F] hover:text-[#316878] font-medium transition-colors duration-200 focus:outline-none focus:underline ml-1 cursor-pointer text-lg"
              @click="handleRegister"
              tabindex="0"
              role="button"
            >
              <span style="font-size:1.1rem;">Regístrate aquí</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleSubmit = () => {
  console.log('Login attempt:', { 
    email: email.value, 
    password: password.value 
  })
}

const handleGoogleLogin = () => {
  console.log('Google login attempt')
}

const handleForgotPassword = () => {
  console.log('Forgot password clicked')
}

const handleRegister = () => {
  router.push({ name: 'Register' })
}
</script>