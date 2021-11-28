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
            :echartsType="item.chartDatas"
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
const barData = {
  xdata: ["1月", "2月", "3月", "4月", "5月"],
  seriesData: [
    {
      name: "PC登录情况",
      type: "bar",
      data: [100, 120, 116, 88, 98]
    },
    {
      name: "App登录情况",
      type: "line",
      data: [60, 70, 55, 60, 76]
    }
  ]
};
const barData1 = {
  xdata: ["1月", "2月", "3月", "4月", "5月"],
  seriesData: [
    {
      name: "行业分布",
      type: "bar",
      data: [100, 120, 116, 88, 98]
    },
    {
      name: "分行分布",
      type: "bar",
      data: [60, 0, 70, 55, 60]
    }
  ]
};
const barData3 = {
  xdata: ["1月", "2月", "3月", "4月", "5月"],
  seriesData: [
    {
      name: "行业分布",
      type: "pie",
      // radius: ['40%', '70%'],
      radius: "70%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" }
      ]
    }
  ]
};
const chartsLists = [
  {
    id: 1,
    chartDatas: {
      type: "bar",
      data: barData
    }
  },
  {
    id: 2,
    chartDatas: {
      type: "line",
      data: barData3
    }
  },
  {
    id: 3,
    chartDatas: {
      type: "bar",
      data: barData1
    }
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
  mounted() {
    console.log(this.chartsLists);
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
}
</style>
