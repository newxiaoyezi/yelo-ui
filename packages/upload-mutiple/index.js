import upload from './src/upload-mutiple.vue'

upload.install = function (Vue) {
  Vue.component(upload.name, upload )
}

export default upload 