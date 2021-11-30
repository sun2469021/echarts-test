import ChartsColor from "./chartsColor";
/**
 *
 * @param {Boolean} horizontal 柱状图是横向还是纵向
 * @param {Array} color 柱状色系
 * @param {String} colorMoudle 默认配套柱状色系
 * @returns
 */
var barOption = function(data) {
  let { horizontal, color, colorMoudle } = { ...data.nomalParams },
    xLine = {
      type: "category",
      axisLine: {
        lineStyle: {
          color: ["#efefef"]
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "#666",
          fontSize: "12"
        }
      },
      data: data.xdata
    },
    yLine = {
      type: "value",
      axisLine: {
        lineStyle: {
          color: ["#dcdcdc"]
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "#666",
          fontSize: "12"
        }
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: ["#efefef"]
        }
      }
    };
  return {
    color:
      color && color.length > 0 ? color : ChartsColor.getColors(colorMoudle),
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
      left: "20",
      right: "20",
      bottom: "3%",
      containLabel: true
    },
    legend: {
      data: data.seriesData.forEach(item => item.name)
    },
    xAxis: horizontal ? yLine : xLine,
    yAxis: horizontal ? xLine : yLine,
    series: data.seriesData
  };
};
export default barOption;
