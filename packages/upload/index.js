import upload  from './src/upload.vue'

upload.install = function (Vue) {
  Vue.component(upload.name, upload )
}

export default upload 