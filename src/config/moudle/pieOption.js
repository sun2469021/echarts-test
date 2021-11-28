var pieOption = function(data) {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      // orient: "vertical",
      left: "center",
      bottom: "20"
    },
    series: data.seriesData
  };
};
export default pieOption;
