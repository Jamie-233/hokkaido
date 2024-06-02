import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from './routes'

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes
})

export default router
