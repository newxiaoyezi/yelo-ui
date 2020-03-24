<template>
  <div id="app">
    <h3>yelo-ui  乐橘组件库</h3>
    <div id="nav">
      <router-link to="/">示例</router-link> |
      <router-link to="/about">说明</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  width: 1200px;
  height: 100%;
  margin:auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h3 {
    font-size: 20px;
  }
}

#nav {
  padding: 15px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #409eff;
    }
  }
}
</style>
