<template>
  <div id="demo">
    <el-container>
      <el-aside width="300px">
        <Add @addChart="addChart" @layout="layout"></Add>
      </el-aside>
      <el-main>
        <div class="charts-content" v-if="chartsLists.length > 0">
          <Echarts
            v-for="item in chartsLists"
            :key="item.id"
            :echartId="item.id"
            :echartsData="item.echartsData"
            :width="width"
          ></Echarts>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Add from "../Add/index.vue";
const createId = () => {
  return new Date().getTime(); //时间戳变更---分支测试11122
};
const barData = {
  nomalParams: {
    horizontal: true,
    color: ["red", "blue"]
  }, //其它参数
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
  nomalParams: {
    horizontal: false,
    colorMoudle: "moudle3"
  }, //其它参数，用于扩展
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
  nomalParams: {}, //其它参数
  xdata: ["1月", "2月", "3月", "4月", "5月"],
  seriesData: [
    {
      name: "行业分布",
      type: "pie",
      center: ["50%", "50%"],
      radius: "70%",
      left: 0,
      right: "66.66%",
      top: 0,
      bottom: 0,
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" }
      ]
    },
    {
      name: "分行分布",
      type: "pie",
      center: ["50%", "50%"],
      radius: "70%",
      left: "33.3333%",
      right: "33.3333%",
      top: 0,
      bottom: 0,
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
    echartsData: barData
  },
  {
    id: 2,
    echartsData: barData3
  },
  {
    id: 3,
    echartsData: barData1
  }
];
export default {
  name: "singBar",
  props: {},
  components: {
    Add
  },
  data() {
    return {
      chartsLists,
      width: "50%"
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
    },
    // 新增图信息
    addChart(val) {
      console.log(val);
      let nomalParams = { ...val },
        xdata = ["1月", "2月", "3月", "4月", "5月"],
        seriesData = [
          {
            name: "科学计数",
            type: val.chartType,
            data: Utils.TestData.getArrayElements()
          }
        ];
      this.chartsLists.push({
        id: createId(),
        echartsData: {
          nomalParams,
          xdata,
          seriesData
        }
      });
      // let data = Utils.TestData.getArrayElements();
      // console.log(data);
    },
    // 布局调整
    layout(val) {
      console.log(chartsLists);
      this.chartsLists = [];
      this.width = val == "two" ? "50%" : "33.33%";
      this.$nextTick(() => {
        this.chartsLists = chartsLists;
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
