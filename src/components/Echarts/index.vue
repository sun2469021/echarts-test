<template>
  <div :id="echartId" :style="style"></div>
</template>
<script>
// 获取随机的id到底
import option from "../../config/index";
const createId = () => {
  // 默认用时间戳创建容器ID
  return new Date().getTime();
};
export default {
  name: "Echarts",
  props: {
    height: {
      // 生成图表容器的高
      type: String,
      default: "400px"
    },
    width: {
      // 生成图表容器的宽度
      type: String,
      default: "100%"
    },
    echartId: {
      // 生成图表的容器ID
      type: [String, Number],
      default: createId()
    },
    echartsType: {
      // 所选图表类型
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    // 监听宽度变化自适应图
    width(width) {
      if (this.myChart) {
        this.myChart.resize({
          width
        });
      }
    },
    // 监听高度变化自适应图
    height(height) {
      if (this.myChart) {
        this.myChart.resize({
          height
        });
      }
    },
    echartsType(val) {
      console.log(val);
    }
  },
  computed: {
    // 调整容器的样式
    style() {
      return {
        height: this.height,
        width: this.width
      };
    }
  },
  data() {
    return {
      myChart: null,
      option: null
    };
  },
  mounted() {
    console.log(this.echartId);
    console.log(this.echartsType);
    this.echartsInit(); // 初始化echarts图
    window.addEventListener("resize", this.echatsResize); // 监听容器变化自适应图
  },
  destroyed() {
    // 销毁实例并初始化
    window.removeEventListener("resize", this.echatsResize);
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    echartsInit() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById(this.echartId));
      // 使用刚指定的配置项和数据显示图表。
      this.option = option.getOptions(this.echartsType);
      this.myChart.setOption(this.option);
    },
    echatsResize() {
      // 自适应图表
      this.myChart.resize();
    }
  }
};
</script>
