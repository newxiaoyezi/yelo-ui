//输入金额 可选小数位，大小限制，长度限制，
import moneyInput  from './src/moneyInput.vue'

moneyInput.install = function (Vue) {
  Vue.component(moneyInput.name, moneyInput )
}

export default moneyInput 