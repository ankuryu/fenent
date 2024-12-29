const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/dash', component: () => import('pages/dash.vue') },
      { path: '/fen', component: () => import('pages/fen.vue') },
      { path: '/vndr', component: () => import('pages/vndr.vue') },
      { path: '/items', component: () => import('pages/items.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/dash',
    component: () => import('pages/dash.vue')
  }
]

export default routes
