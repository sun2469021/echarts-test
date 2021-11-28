// 全局公共方法
export default {
  /**
   * 锚点定位方法(class类名定位)
   * @param {String} className 需要定位元素的class类名
   * @param {String、Nubmer} index 需要跳转到对应定位元素所在类名集合中的索引
   * 全局调用 Utils.Public.jumpToPositionFromClass(className, index)
   */
  jumpToPositionFromClass(className = ".public", index = 0) {
    let jump = document.querySelectorAll(className);
    jump[index].scrollIntoView({ block: "start", behavior: "smooth" });
  },
  /**
   * 锚点定位方法(id定位)
   * @param {String} id 需要定位元素的id名
   * 全局调用 Utils.Public.jumpToPositionFromId(id)
   */
  jumpToPositionFromId(id = "#public") {
    let jump = document.querySelector(id);
    jump.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};
