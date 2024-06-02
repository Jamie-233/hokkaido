export const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/layout/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/index.vue')
  },
  {
    path: '/',
    name: 'Product',
    component: () => import('@/layout/components/product/index.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('@/layout/Sidebar.vue')
  }
]
