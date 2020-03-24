import input  from './src/input.vue'

input.install = function (Vue) {
  Vue.component(input.name, input )
}

export default input 