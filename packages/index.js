/*
 * @Author: zlf
 * @Date: 2020-03-03 10:32:14
 * @LastEditors: zlf
 * @LastEditTime: 2020-08-20 10:35:56
 * @Description: 
 * @FilePath: \yelo-ui\packages\index.js
 */
// 导入组件
import button from './button'
import caslendar from './caslendar'
import dialog from './dialog'
import input from './input'
import moneyInput from './moneyInput'
import menu from './menu'
import notice from './notice'
import RFIDCodes from './RFIDCodes'
import select from './select'
import table from './table'
import tableComm from './table-comm'
import textarea from './textarea'
import tree from './tree'
import upload from './upload'
import uploadMutiple from './upload-mutiple'
import tinymceEditor from './tinymceEditor'

// 存储组件列表
const components = [
    button,
    caslendar,
    dialog,
    input,
    moneyInput,
    menu,
    notice,
    RFIDCodes,
    select,
    table,
    tableComm,
    textarea,
    tree,
    upload,
    uploadMutiple,
    tinymceEditor
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  button,
  caslendar,
  dialog,
  input,
  moneyInput,
  menu,
  notice,
  RFIDCodes,
  select,
  table,
  tableComm,
  textarea,
  tree,
  upload,
  uploadMutiple,
  tinymceEditor,
}