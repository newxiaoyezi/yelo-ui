<style scoped lang="scss">
</style>
<template>
  <div style='width: 100%;height: 100%;min-width: 1216px;'>
    <el-container style='display:flex;flex-direction:column;width: 100%;height: 100%;'>
      <slot ></slot>
    </el-container>
  </div>

</template>
<script>
import Vue from 'vue'
import { Container } from 'element-ui'
Vue.use(Container);

export default {
  name: "yeloWrapper",
}
</script>
