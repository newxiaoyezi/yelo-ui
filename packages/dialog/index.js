import dialog  from './src/dialog.vue'

dialog.install = function (Vue) {
  Vue.component(dialog.name, dialog )
}

export default dialog 