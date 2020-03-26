<template>
  <el-select
    v-model="selectValue"
    :style="{'width':width}"
    :placeholder="placeholder"
    :clearable="searchAble"
    :filterable="searchAble"
    :remote="searchAble"
    :remote-method="remoteMethod"
    @focus="remoteMethod"
    :popper-append-to-body="false"
  >
    <el-option
      v-for="item in currentOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></el-option>
    <div class="page-bottom" style="text-align:center;" v-if="(totalPage > 1) && pageShow">
      <el-button type="text" :disabled="currentPage===1" @click="clickPageChange(1)">
        <i class="el-icon-d-arrow-left"></i>
      </el-button>
      <el-button type="text" :disabled="currentPage===1" @click="clickPageChange(currentPage-1)" class="btn">
        <i class="el-icon-arrow-left"></i>
      </el-button>
      <span>{{currentPage}} / {{totalPage}}</span>
      <el-button type="text" :disabled="currentPage===totalPage" @click="clickPageChange(currentPage+1)">
        <i class="el-icon-arrow-right"></i>
      </el-button>
      <el-button type="text" :disabled="currentPage===totalPage" @click="clickPageChange(totalPage)" class="btn">
        <i class="el-icon-d-arrow-right"></i>
      </el-button>
    </div>
  </el-select>
</template>
<script>
import Vue from 'vue'
import { Select,Option,Button } from 'element-ui'
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);

export default {
  name: "yeloSelect",
  props: {
    width: {
      type: String,
      default: "200px"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {//v-model可传入有value属性的对象，也可直接传入value，返回options中选中的一个对象
      type: String | Object,
      default: ""
    },
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    pageShow: {
      //是否显示分页
      type: Boolean,
      default: false
    },
    pageSize: {
      //下拉框一页数量
      type: Number,
      default: 10
    },

    searchAble: {
      //是否可以输入搜索
      type: Boolean,
      default: false
    },
    reqPromise: Function,//searchAble为true传入
    
    axiosDataAble: {
      //是否从接口只获取一页的数据
      type: Boolean,
      default: false
    },
    totalNum: {//axiosDataAble为true传入
      //下拉框数据总数
      type: Number,
      default: 0
    },
    
    pageChange: {//页数变化时调用
      type: Function,
      default: () => {}
    },
  },
  model: {
    prop: "value",
    event: "changeValue"
  },
  data() {
    return {
      selectValue: this.value.value || this.value,
      currentPage: 1,
      loading: false,
      remoteOptions: [], //需要搜索时的数据
      currentOptions: []//本页数据
    };
  },
  watch: {
    selectValue(val) {
      for(let item of this.totalOptions) {
        if(item.value === val) {
          this.$emit("changeValue", item);
        }
      }
    },
    currentPage: {
      handler: function(val) {
        this.showOptions(val);
      },
      immediate: true
    }
  },
  computed: {
    totalPage() {
      //总页数
      return Math.ceil((this.totalOptions.length || 0) / this.pageSize);
    },
    totalOptions() {//全部数据
      if (this.searchAble) {
        return this.remoteOptions;
      } else {
        return this.options;
      }
    },
  },
  methods: {
    clickPageChange(page) {
      this.currentPage = page;
    },
    showOptions(page) {
      //页数改变
      this.pageChange(page);//触发父组件页数变化方法
      if (this.axiosDataAble || !this.pageShow) {//从后端获取分页数据
        this.currentOptions = this.totalOptions;
      }else {//直接获取全部数据时自己分页
        this.currentOptions = this.totalOptions.slice(
          (page - 1) * this.pageSize,
          page * this.pageSize
        );
      }
    },
    remoteMethod(query) {
      if (this.searchAble) {
        //传入关键词搜索时，返回的res数组须有value(值)及label(文本)属性，别的属性不限
        //返回时全部返回
        this.loading = true;
        this.reqPromise(query).then(
          res => {
            this.loading = false;
            this.remoteOptions = res;
          },
          err => {
            this.remoteOptions = [];
          }
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.page-bottom {
  display: flex;
  margin-top: 6px;
  button {
    padding: 0;
    border-color: transparent;
    font-size: 12px;
    line-height: 22px;
    height: 22px;
    min-width: 22px;
    color: #303133;
  }
  button :hover {
    color: #94bf4b;
  }
  button:disabled {
    color: #c0c4cc;
  }
  .btn {
    margin-left: 0px;
  }
  span {
    font-size: 12px;
    width: calc(100% - 88px);
    line-height: 22px;
  }
}
</style>
