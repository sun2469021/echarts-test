<template>
  <div id="demo">
    <el-container>
      <el-aside width="300px">
        <div>
          <span>布局选择</span>
          <el-radio-group v-model="radio">
            <el-radio-button label="两个"></el-radio-button>
            <el-radio-button label="三个"></el-radio-button>
          </el-radio-group>
        </div>
        <button @click="changeW">切换宽度</button>
      </el-aside>
      <el-main>
        <div class="charts-content">
          <Echarts
            v-for="item in chartsLists"
            :key="item.id"
            :echartId="item.id"
            :echartsType="item.echartsType"
            width="33%"
          ></Echarts>
        </div>
      </el-main>
    </el-container>
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
  name: "singBar",
  props: {},
  data() {
    return {
      chartsLists,
      radio: "两个"
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
