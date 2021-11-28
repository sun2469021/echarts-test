<template>
  <div id="demo">
    <button @click="changeW">切换宽度</button>
    <div class="charts-content">
      <Echarts
        v-for="item in chartsLists"
        :key="item.id"
        :echartId="item.id"
        :echartsType="item.echartsType"
        width="33%"
      ></Echarts>
    </div>
  </div>
</template>
<script>
const createId = () => {
  return new Date().getTime(); //时间戳变更---分支测试11122
};
const chartsLists = [
  {
    id: 1,
    echartsType: "bar"
  },
  {
    id: 2,
    echartsType: "line"
  },
  {
    id: 3,
    echartsType: "bar"
  }
];
export default {
  name: "",
  props: {},
  data() {
    return {
      chartsLists
    };
  },
  methods: {
    changeW() {
      let id = createId(),
        echartsType = "bar";
      this.chartsLists.push({
        id,
        echartsType
      });
    }
  }
};
</script>
<style lang="less" scoped>
.charts-content {
  display: flex;
  flex-wrap: wrap;
  //   justify-content: space-between;
}
</style>
