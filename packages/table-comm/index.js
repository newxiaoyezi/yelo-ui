import table  from './src/table-comm.vue'

table.install = function (Vue) {
  Vue.component(table.name, table )
}

export default table 