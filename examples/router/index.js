import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/button/index.vue'
import Dialog from '../views/dialog/index.vue'
import Input from '../views/input/index.vue'
import Caslendar from '../views/caslendar/index.vue'
import Menu from '../views/menu/index.vue'
import Select from '../views/select/index.vue'

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
    }, {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog,
    }, {
      path: '/input',
      name: 'Input',
      component: Input,
    }, {
      path: '/caslendar',
      name: 'Caslendar',
      component: Caslendar,
    }, {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    }, {
      path: '/select',
      name: 'Select',
      component: Select,
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
