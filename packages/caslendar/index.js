import caslendar  from './src/caslendar.vue'

caslendar.install = function (Vue) {
  Vue.component(caslendar.name, caslendar )
}

export default caslendar 