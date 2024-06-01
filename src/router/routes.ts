export default [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/layout/Dashboard.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('@/views/layout/Sidebar.vue')
  }
]
