<template>
  <div class="home">
    <ul class="left-menu">
      <li 
        v-for="item in routerList" 
        :key="item.name" 
        @click="changeRouter(item.pathName)"
        :style="activeName === item.pathName ? 'color: #409efe' : ''"
      >
        <div style="width: 125px;">{{item.name}}</div>
        <div>{{item.comName}}</div>
      </li>
    </ul>
    <div style="height: 100%; width: 1px; background: #409efe"></div>
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
  height: 100%;
  display: flex;
  .left-menu {
    width: 260px;
    height: 100%;
    list-style-type: none;
    padding-inline-start: 0px;
    li {
      text-align: left;
      display: flex;
      margin-bottom: 15px;
      font-weight: bold;
      color: #333;
      cursor: pointer;
    }
  }
  .right-content {
    padding: 16px 20px;
    width: calc(100% - 340px);
    text-align: left;
  }
}
</style>
