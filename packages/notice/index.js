import notice  from './src/notice.vue'

notice.install = function (Vue) {
  Vue.component(notice.name, notice )
}

export default notice 