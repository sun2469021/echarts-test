export default {
  // 获取配色
  getColors(type = "moudle1") {
    let colors = [];
    switch (type) {
      case "moudle1":
        colors = ["#ff7635", "#ffad35", "#e22e5f", "#ffd505", "#f56388"];
        break;
      case "moudle2":
        colors = ["#de5760", "#eb955a", "#b04690", "#e99ca4", "#f0b082"];
        break;
      case "moudle3":
        colors = ["#de579a", "#f07b6a", "#9559b8", "#f29c8f", "#c39cda"];
        break;
      default:
        break;
    }
    return colors;
  },
  // 获取渐变配色（待完善）
  getGradientColors(type) {}
};
