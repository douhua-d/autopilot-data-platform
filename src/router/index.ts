import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/data-detail',
    name: '数据详情',
    component: () => import('@views/DataDetail.vue'),
    meta: {
      breadcrumb: [],
    },
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('@views/DataView.vue'),
  //   meta: {
  //     breadcrumb: [],
  //   },
  // },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@views/Test.vue'),
    meta: {
      breadcrumb: [],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
