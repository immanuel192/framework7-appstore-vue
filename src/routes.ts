const routes = [
  {
    path: '/today/',
    asyncComponent: () => import(/* webpackChunkName: "app-today" *//* webpackPreload: true */ '@/views/Today.vue'),
  },
  // {
  //   path: '/games/',
  //   component: Games,
  // },
  // {
  //   path: '/apps/',
  //   component: Apps,
  // },
  // {
  //   path: '/arcade/',
  //   component: Arcade,
  // },
  // {
  //   path: '/search/',
  //   component: Search,
  // },
  // {
  //   path: '/app/:id',
  //   asyncComponent: () => import(/* webpackChunkName: "app-details" *//* webpackPreload: true */ '@/views/AppDetails.vue'),
  // },
  // {
  //   path: '/account/',
  //   popup: {
  //     asyncComponent: () => import(/* webpackChunkName: "account" *//* webpackPreload: true */ '@/views/Account.vue'),
  //   },
  // },
  // {
  //   path: '(.*)',
  //   asyncComponent: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
  // },
];

export default routes;
