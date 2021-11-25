var optionBar = {
  title: {
    // text: "ECharts 入门示例"
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
var optionLine = {
  title: {
    // text: "ECharts 入门示例"
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
      type: "line",
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
/**
 * 获取echarts图渲染的option参数
 * option {Object} 默认公共option
 * type {String} 所选择的图的类型
 */
let getOptions = (type = "bar") => {
  let option = {};
  switch (type) {
    case "bar":
      option = optionBar;
      break;
    case "line":
      option = optionLine;
      break;
    default:
      break;
  }
  return option;
};

export default {
  getOptions
};
