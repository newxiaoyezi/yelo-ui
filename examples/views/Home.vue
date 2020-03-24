<template>
  <div class="home">
    <div class="left-menu">
      <a>按钮 yelo-button</a>
    </div>
    <div class="right-content">
      <router-link></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /examples
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: calc( 100% - 117px);
  display: flex;
  .left-menu {
    width: 200px;
    height: 100%;
  }
}
</style>
