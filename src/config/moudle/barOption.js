import ChartsColor from "./chartsColor";
/**
 *
 * @param {Boolean} horizontal 柱状图是横向还是纵向
 * @param {Array} color 柱状色系
 * @param {String} colorMoudle 默认配套柱状色系
 * @returns
 */
var barOption = function(data) {
  let { horizontal, color, colorMoudle, limitType } = {
      ...data.nomalParams
    },
    { xdata, seriesData } = { ...data },
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
      data: xdata
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
  console.log(limitType);
  console.log(typeof limitType != "undefined");
  if (typeof limitType != "undefined") {
  }
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
      bottom: "30",
      containLabel: true
    },
    legend: {
      data: seriesData.forEach(item => item.name)
    },
    dataZoom: [
      {
        type: "slider",
        bottom: "5",
        minValueSpan: "5"
      }
    ],
    xAxis: horizontal ? yLine : xLine,
    yAxis: horizontal ? xLine : yLine,
    series: seriesData
  };
};
export default barOption;
