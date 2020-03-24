<template>
  <div class='ztree' style='height:100%'>
    <el-tree default-expand-all ref='getRoleTree' @check='checkedBox(data)' node-key="id" :data="data" show-checkbox :props='{children: "children",label: "label"}' :default-checked-keys="checkedKeys" :expand-on-click-node="false">
    </el-tree>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { Tree } from 'element-ui'
  Vue.use(Tree);

  export default {
    name: "yeloTree",
    model: {
      prop: "tree",
      event: "changeTree"
    },
    props: {
      data: {
        type: Array,
        default: []
      },
      checkedKeys: {
        type: Array,
        default: []
      },
      tree: {
        type: Object,
        default: {}
      },
      checkedBox: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {};
    },
    mounted() {
      this.$emit("changeTree", this.$refs.getRoleTree);
    }
  };
</script>
<style lang="scss" scoped>
</style>


<style>
  .ztree .el-tree {
    height: 100%;
    overflow: scroll;
    overflow-x: auto;
    overflow-y: auto;
  }
</style>
