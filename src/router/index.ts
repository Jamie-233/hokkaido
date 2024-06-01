import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
