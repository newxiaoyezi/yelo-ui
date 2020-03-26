<style>

.main-b .el-submenu__title {
  height: 35px !important;
  line-height: 35px !important;
  display: flex;
  align-items: center;
  background-color: #594f4e !important;;

}
.main-c .el-submenu__title {
  height: 35px !important;
  line-height: 35px !important;
  /* margin-left: 25px; */
  display: flex;
  align-items: center;
  background-color: #605351 !important;;

}
.main-b .el-menu {
  background-color: #605351 !important;;
}

.main-b .el-menu-item {
  height: 35px !important;
  line-height: 35px !important;
  background-color: #605351 !important;;
  /* margin-left: 25px; */
}
.main-b .el-menu-item:hover,
.main-b .el-menu-item:after,
.main-b .el-menu-item:before,
.main-b .el-menu-item:focus {
  background-color: #605351 !important;;
}
</style>

<style lang="scss" scoped>

</style>


<template>
  <div class="navMenu">

    <label v-for="(item,index) in menu" :key="index">
      <el-menu-item v-if="item.children.length==0&&item.icon==''"  :index="JSON.stringify({name:item.title,component:item.component,data:item.data})" >{{item.title}}</el-menu-item>

      <el-submenu v-else :class='item.icon!=""?"main-b":"main-c"' :index="JSON.stringify({name:item.title,component:item.component,data:item.data})">
        <template slot="title" style='display:flex;align-items:center'>
          <img v-if="item.icon!=''" :src='item.icon' style='height:14px;width:14px;margin-right:3px;' />
          <p> {{item.title}}</p>

        </template>

        <yeloSubMenu :menu='item.children'></yeloSubMenu>
      </el-submenu>

    </label>
  </div>
</template>

<script>
import Vue from 'vue'
import { MenuItem,Submenu } from 'element-ui'
// 组件嵌套循环调用 需要异步调用
// 此处引用有问题，待解决 TAT 
Vue.use(Submenu);
Vue.use(MenuItem);

export default {
  name: 'yeloSubMenu',
  props: ['menu'],
  data() {
    return {}
  },
  methods: {},
  components: {
  }
}
</script>

<style scoped>
</style>
