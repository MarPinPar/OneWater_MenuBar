
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'search', component: () => import('pages/Search.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
      { path: 'events', component: () => import('pages/Events.vue') },
      { path: 'engage', component: () => import('pages/Engage.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'podcasts', component: () => import('pages/Podcasts.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
