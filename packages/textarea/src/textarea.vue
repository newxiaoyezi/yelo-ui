<style>
.zinput .el-textarea__inner {
  resize: none;
  padding: 5px 5px 5px 5px;
  width: 100%;
  height: 100%;
}
</style>
<style scoped lang="scss">
.zinput {
  height: 100%;
  width: 100%;
}
</style>

<template>

  <div class='zinput'>
    <el-input resize="false" type="textarea" :maxlength='maxlength' @change="handleInput" v-model="value" :placeholder="placeholder" :style='{"fontSize":fontSize,"height":height,"width":width}'>
    </el-input>
  </div>
</template>
<script>
import Vue from 'vue'
import { Input } from 'element-ui'
Vue.use(Input);

export default {
  name: "yeloTextarea",
  model: {
    prop: 'inputValue',
    event: 'changeValue'
  },
  props: [
    'inputValue',
    'maxlength',
    'placeholder',
    'fontSize',
    'width',
    'height'
  ],

  data() {
    return {
      value: this.inputValue
    }
  },

  methods: {
    handleInput(event) {
      this.$emit('changeValue', event)
    }
  },
  watch: {
    inputValue: function(val) {
      this.value = val
    }
  }
}
</script>
