<template>
  <div style='display: flex;flex-direction: column;height: 100%;width: 100%;'>
    <div style='background-color:#F3F3F3;height:50px;display:flex;justify-content:center;align-items:center'>托盘编号</div>
    <div style='height:100%;overflow-x:hidden;overflow-y:auto;flex-wrap: wrap;'>
      <el-tag
        style="margin:4px"
        v-for="(item,index) in codes[currentPage-1]"
        :key="index"
      >{{item}}</el-tag>
    </div>
    <el-pagination
      style="align-self:center"
      small
      layout="prev, pager, next"
      :current-page.sync="currentPage"
      :total="originCodes.length"
      :page-size='100'
    >
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { Tag,Pagination } from 'element-ui'
Vue.use(Tag);
Vue.use(Pagination);

export default {
  name: "RFID-codes",
  props: {
    originCodes: {
      type: Array,
      default: () => []
    }
    // total: {
    //   type: Number,
    //   default: 0
    // }
  },
  data() {
    return {
      currentPage: 0,
      codes: []
    };
  },
  mounted() {
    this.codes = this.changeCodesToSec(this.originCodes, 100);
    // console.dir("this.codes")
    // console.dir(this.codes)
  },
  watch: {
    originCodes(val) {

      this.codes = this.changeCodesToSec(val, 100);
    }
  },
  methods: {
    changeCodesToSec(codes = [], num = 100) {
      let temp = 0;
      let tempArr = [];
      for (let index = 1; index <= Math.ceil(codes.length / num); index++) {
        tempArr.push(codes.slice(temp, temp + num));
        temp = temp + num;
      }

      return tempArr;
    }
  }
};
</script>

