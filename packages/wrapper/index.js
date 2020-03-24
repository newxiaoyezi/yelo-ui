import wrapper  from './src/wrapper.vue'

wrapper.install = function (Vue) {
  Vue.component(wrapper.name, wrapper )
}

export default wrapper 