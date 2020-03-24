<template>
  <div class="home">
    <ul class="left-menu">
      <li @click="changeRouter('Button')">按钮 yelo-button</li>
      <li>对话框 yelo-dialog</li>
    </ul>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /examples
export default {
  name: "Home",
  data() {
    return {

    }
  },
  methods: {
    changeRouter(pathName) {
      this.$router.push({name: pathName});
    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100% - 117px);
  display: flex;
  .left-menu {
    width: 200px;
    height: 100%;
    list-style-type: none;
    li {
      margin-bottom: 10px;
      font-weight: bold;
      color: #333;
      cursor: pointer;
    }
  }
}
</style>
