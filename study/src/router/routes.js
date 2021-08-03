
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'ReportInfo', component: () => import('pages/ReportInfo') },
      { path: 'CustomerInfo', component: () => import('pages/CustomerInfo') },
      { path: 'LocationInfo', component: () => import('pages/LocationInfo') },
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
