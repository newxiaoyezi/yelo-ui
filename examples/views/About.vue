<template>
  <div class="about">
    <h3>下载方法</h3>
    <p>1.设置npm下载路径 </p>
    <span>npm set registry https://x.x.x.x:xxxx(私有库地址)</span>
    <p>2.npm下载</p>
    <span>npm install yelo-ui</span>

    <h3 style="margin-top: 20px;">对本库进行修改</h3>
    <p>注意版本，每次修改需要更改版本号，不得低于旧版本</p>
    <p>编译</p>
    <span>npm run lib</span>
    <p>发布</p>
    <span>npm publish --registry https://x.x.x.x:xxxx(私有库地址)</span>
  </div>
</template>
<style lang="scss" scoped>
.about {
  text-align: left;
  p {
    text-align: left;
  }
  span {
    color: rgb(218, 100, 32);
  }
}
</style>
