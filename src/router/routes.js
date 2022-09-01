const routes = [
  { 
    path: '/aymerick-photo/',
    children: [
      {
        path: '',
        alias: '',
        name: 'home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'gallery',
        alias: '',
        name: 'gallery',
        component: () => import('@/pages/Gallery.vue')
      },
    ]
  },
]

export default routes