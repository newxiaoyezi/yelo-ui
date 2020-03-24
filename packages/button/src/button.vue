<template>
  <div class="zbutton">
    <el-button
      @click="click"
      :type="type"
      :style="{'width':width,'height':height,'font-size':fontSize, 'padding': padding,
        'color': color, 'border': type===''?('1px solid '+color):''}"
    >
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "element-ui";
Vue.use(Button);

export default {
  name: "yeloButton",
  props: {
    padding: {
      type: String,
      default: "5px 8px"
    },
    width: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: ""
    },
    fontSize: {
      type: String,
      default: "16px"
    },
    color: {
      type: String,
      default: "white"
    },
    type: {
      type: String,
      default: "primary"
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style >
.zbutton .el-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}
</style>
