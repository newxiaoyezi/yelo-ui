import menu  from './src/menu.vue'

menu.install = function (Vue) {
  Vue.component(menu.name, menu )
}

export default menu 