import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/button/index.vue'
import Dialog from '../views/dialog/index.vue'
import Input from '../views/input/index.vue'
import Caslendar from '../views/caslendar/index.vue'
import Menu from '../views/menu/index.vue'
import Select from '../views/select/index.vue'
import Table from '../views/table/index.vue'
import TableComm from '../views/table-comm/index.vue'
import Textarea from '../views/textarea/index.vue'
import Tree from '../views/tree/index.vue'
import Upload from '../views/upload/index.vue'
import UploadMutiple from '../views/upload-multiple/index.vue'

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
    }, {
      path: '/table',
      name: 'Table',
      component: Table,
    }, {
      path: '/tableComm',
      name: 'TableComm',
      component: TableComm,
    }, {
      path: '/textarea',
      name: 'Textarea',
      component: Textarea,
    }, {
      path: '/tree',
      name: 'Tree',
      component: Tree,
    }, {
      path: '/upload',
      name: 'Upload',
      component: Upload,
    }, {
      path: '/uploadMutiple',
      name: 'UploadMutiple',
      component: UploadMutiple,
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

//解决进入相同路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
