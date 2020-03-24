import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/button/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: '/button',
      name: 'Button',
      component: Button,
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
