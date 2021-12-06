import Vue from 'vue'
import VueRouter from 'vue-router'
import './layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'default-layout'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Home.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      layout: 'default-layout'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Cart/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
