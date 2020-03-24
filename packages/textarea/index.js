import textarea  from './src/textarea.vue'

textarea.install = function (Vue) {
  Vue.component(textarea.name, textarea )
}

export default textarea 