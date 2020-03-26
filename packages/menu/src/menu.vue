<template>
  <el-menu
    text-color="white"
    :unique-opened="true"
    :default-active="defaultClick"
    @select="handleOpen"
    @close="handleClose"
  >
      <yeloSubMenu :menu='menu'></yeloSubMenu>
  </el-menu>
</template>

<script>
import Vue from 'vue'
import { Menu } from 'element-ui'
import yeloSubMenu from '../../subMenu/src/subMenu'
Vue.use(Menu); 

export default {
  name: 'yeloMenu',
  props: {
    menu: {
      type: Array,
      default: () => {
        return [];
      }
    },
    handleOpen: {
      type: Function,
      default: () => {}
    },
    handleClose: {
      type: Function,
      default: () => {}
    },
    defaultClick: {
      type: String,
      default: "",
    }
  },
  data() {
    return {}
  },
  components: {
    yeloSubMenu
  }
}
</script>

<style scoped>
</style>
