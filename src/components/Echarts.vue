<template>
  <div>
    <div :id="chartId" :style="style"></div>
  </div>
</template>
<script>
// 获取随机的id
const createId = () => {
  return new Date().getTime(); //时间戳变更---分支测试111
};
export default {
  name: "Echarts",
  props: {
    height: {
      type: String,
      default: "400px"
    },
    width: {
      type: String,
      default: "400px"
    }
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width
      };
    }
  },
  data() {
    return {
      chartId: null,
      myChart: null
    };
  },
  created() {
    this.chartId = createId();
  },
  mounted() {
    this.echartsShow();
  },
  methods: {
    echartsShow() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById(this.chartId));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    }
  }
};
</script>
