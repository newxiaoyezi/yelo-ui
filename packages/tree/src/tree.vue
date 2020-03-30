<template>
  <div
    class="ztree2"
    style="height:100%"
  >
    <el-tree
      default-expand-all
      ref="getRoleTree"
      :check-strictly="strictly"
      @check="checkedBox(data)"
      node-key="id"
      :data="data"
      show-checkbox
      :props="{children: 'children',label: 'label'}"
      :default-checked-keys="checkedKeys"
      :expand-on-click-node="false"
    >
      <span slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span v-if="strictly&&data.children.length > 0">
          <el-button
            type="text"
            size="mini"
            @click="() => checked(node, data)"
          >全选</el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => unchecked(node, data)"
          >取消</el-button>
        </span>
      </span>
      <!-- <span v-if="!strictly" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
      </span>-->
    </el-tree>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { Tree } from "element-ui";
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
      default: () => {
        return [];
      }
    },
    strictly: {
      type: Boolean,
      default: true
    },
    tree: {
      type: Object,
      default: () => {
        return {}
      }
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
  },
  methods: {
    checked(node, data) {
      let ids = this.getChildrenIds(data);

      let currentIds = this.$refs.getRoleTree.getCheckedKeys();

      let all = new Set(ids.concat(currentIds));
      this.$refs.getRoleTree.setCheckedKeys(all);
    },
    unchecked(node, data) {
      // console.dir("data...............................");
      // console.dir(data);
      let ids = this.getChildrenIds(data);

      let currentIds = this.$refs.getRoleTree.getCheckedKeys();
      let all = this.removeSameId(currentIds, ids);

      this.$nextTick(() => {
        this.$refs.getRoleTree.setCheckedKeys(all);
      });
    },
    removeSameId(currentIds, ids) {
      ids.forEach(element => {
        let index = currentIds.findIndex(i => {
          return i === element;
        });
        if (index !== -1) {
          currentIds.splice(index, 1);
        }
      });

      return currentIds;
    },
    getChildrenIds(data) {
      let ids = data.children.map(i => {
        if (i.children.length > 0) {
          return this.getChildrenIds(i);
        }
        return i.id;
      });
      ids.push(data.id);
      return ids.reduce((acc, val) => acc.concat(val), []);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>


<style>
.ztree2 .el-tree {
  height: 100%;
  overflow: scroll;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
