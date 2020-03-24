<template>
  <div class="home">
    <ul class="left-menu">
      <li 
        v-for="item in routerList" 
        :key="item.name" 
        @click="changeRouter(item.pathName)"
        :style="activeName === item.pathName ? 'color: #409efe' : ''"
      >
        {{item.name}}
      </li>
    </ul>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import routerList from "../assets/comm/routerLink";
export default {
  name: "Home",
  data() {
    return {
      routerList: routerList,
      activeName: "",
    }
  },
  methods: {
    changeRouter(pathName) {
      this.activeName = pathName;
      this.$router.push({name: pathName});
    },
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
  .right-content {
    padding: 16px 20px;
    width: calc(100% - 240px);
  }
}
</style>
