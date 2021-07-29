
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'CustomerInfo', component: () => import('pages/CustomerInfo') },
      { path: 'FresnelCalc', component: () => import('pages/FresnelCalc') },
      { path: 'CreatePDF', component: () => import('pages/CreatePDF') },
      { path: 'Help', component: () => import('pages/Help') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
