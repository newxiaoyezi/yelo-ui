<template>
  <el-table ref="multipleTable"  :data="tableData"  :header-cell-style="getRowClass" tooltip-effect="dark" height='100%' style="width: 100%;min-width:970px">

    <el-table-column v-if="isIndex" fixed="left" align="center" type="index" width="55">

    </el-table-column>

    <el-table-column label-class-name='mark' :show-overflow-tooltip="tooltip"  align="center" :key="column.prop" v-for="column in columns" v-if="!column.btnItems" :prop="column.prop" :type="column.type" :width="column.width" :label="column.label">

    </el-table-column>

    <el-table-column  align="center" :key="column.label" v-for="column in columns" v-if="column.btnItems" :prop="column.prop" :type="column.type" :width="column.width" :label="column.label" :fixed='column.fixed'>
      <template slot-scope="scope">
        <el-button  @click="() => btnItem.func(scope.row)" :key="btnItem.btnTitle" v-for="btnItem in scope.row.btnItems" type="text" :style='{"color":btnItem.color}' size="small">{{btnItem.btnTitle}}</el-button>
      </template>
    </el-table-column>


  </el-table>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { Table,TableColumn,Button } from 'element-ui'
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);

export default {
  name: "yeloTableComm",
  props: {
    tableData: {
      type: Array,
      default: []
    },
    columns: {
      type: Array,
      default: []
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    isIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    selectable(row, index) {
      return row.statusCode !== "1";
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "backgroundColor:#FAFAFA";
      } else {
        return "";
      }
    }
  }
};
</script>



<style >
</style>
