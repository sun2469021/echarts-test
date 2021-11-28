var barOption = function(data) {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: data.seriesData.forEach(item => item.name)
    },
    xAxis: {
      data: data.xdata
    },
    yAxis: {},
    series: data.seriesData
  };
};
export default barOption;
