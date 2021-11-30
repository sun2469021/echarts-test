import BarOption from "./moudle/barOption";
import PieOption from "./moudle/pieOption";
/**
 * 获取echarts图渲染的option参数
 * @param {Object} option 默认公共option
 * @param {String} type  所选择的图的类型
 */
let getOptions = data => {
  let type = data.seriesData[0].type,
    option = {};
  switch (type) {
    case "bar":
    case "line":
      option = BarOption(data);
      break;
    case "pie":
      option = PieOption(data);
      break;
    default:
      break;
  }
  return option;
};

export default {
  getOptions
};
