/*
 * @Author: zlf
 * @Date: 2020-08-20 10:21:12
 * @LastEditors: zlf
 * @LastEditTime: 2020-08-20 10:35:23
 * @Description: 
 * @FilePath: \yelo-ui\packages\tinymceEditor\index.js
 */
// tinymce 富文本编辑器 可实时获取字符长度及图片数量
import tinymceEditor  from './src/tinymceEditor.vue'

tinymceEditor.install = function (Vue) {
  Vue.component(tinymceEditor.name, tinymceEditor )
}

export default tinymceEditor 