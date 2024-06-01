export const sidebarMenuList = [
  {
    path: '/dashboard',
    redirect: '/dashboard/home',
    name: 'Dashboard',
    meta: {},
    children: []
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/home',
    name: '商品设定',
    meta: {},
    children: [
      {
        path: '/dashboard',
        redirect: '/dashboard/home',
        name: '商品管理',
        meta: {}
      },
      {
        path: '/dashboard',
        redirect: '/dashboard/home',
        name: '销售额',
        meta: {}
      },
      {
        path: '/dashboard',
        redirect: '/dashboard/home',
        name: '销售额2',
        meta: {}
      }
    ]
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/manage',
    name: 'master管理',
    meta: {},
    children: []
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/info',
    name: 'Info',
    meta: {},
    children: []
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/pay',
    name: 'Pay',
    meta: {},
    children: []
  }
]
