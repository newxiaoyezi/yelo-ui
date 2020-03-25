<template>
  <div class="z-input">
    <el-input
      v-model="inputValue"
      @input="changeInputValue"
      :style="{'width':width,'height':height}"
      :type="type"
      :placeholder="placeholder"
      @keyup.enter.native="enterSearch"
    ></el-input>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { Input } from "element-ui";
Vue.use(Input);

export default {
  name: "yeloInput",
  model: {
    prop: "zvalue",
    event: "changeValue"
  },
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "40px"
    },
    type: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    enterSearch: {
      //输入框内回车事件
      type: Function,
      default: () => {}
    }
  },
  watch: {
    value(val) {
      this.inputValue = val;
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    changeInputValue(val) {
      this.$emit("changeValue", val);
    }
  },
  computed: {
    // labelWidth(){
    //   return 'width:'+this.label_width
    // },
    // labelMargin(){
    //   return 'margin-left:'+this.label_width
    // }
  }
};
</script>

<style>
.z-input {
  display: inline-block;
}

/* .z-input .el-input__inner{
    border: 1px solid #94BF4B;
  }

  .z-input .el-textarea__inner{
    border: 1px solid #94BF4B;
  } */
</style>
