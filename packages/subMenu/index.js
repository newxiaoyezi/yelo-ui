import subMenu  from './src/subMenu.vue'

subMenu.install = function (Vue) {
  Vue.component(subMenu.name, subMenu )
}

export default subMenu