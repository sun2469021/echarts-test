<template>
  <div id="app">
    <div class="header">
      <router-link to="/bar">柱状图</router-link>
      <router-link to="/line">折线图</router-link>
    </div>
    <router-view />
    <!-- <div @click="changeRotate">
      <div class="rotate">旋转</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      r: 0
    };
  },
  methods: {
    changeRotate() {
      let rotate = document.querySelector(".rotate");
      this.r += 30;
      Utils.Public.cssTransform(rotate); // 初始化
      rotate.translate = 100;
      rotate.scale = 2;
      rotate.rotate = this.r;
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
}
.rotate {
  width: 50px;
  height: 50px;
  border: 1px solid red;
  transition: all 0.5s;
}
</style>
