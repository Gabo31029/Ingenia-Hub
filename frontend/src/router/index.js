import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas (las pantallas)
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Feed from '../views/Feed.vue'
import Profile from '../views/Profile.vue'
import Chats from '../views/Chats.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/feed', component: Feed },
  { path: '/profile', component: Profile },
  { path: '/chats', component: Chats },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
