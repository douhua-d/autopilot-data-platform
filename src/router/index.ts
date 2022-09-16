import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/Home.vue'),
    meta: {
      breadcrumb: []
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@views/Index.vue'),
    meta: {
      breadcrumb: []
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
