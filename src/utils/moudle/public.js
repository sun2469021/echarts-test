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
  },
  /**
   * css中transform方法封装1.0
   * @param {Object} ele transform需要加的dom元素
   * 全局调用 Utils.Public.cssTransform(ele, attr, val)
   */
  cssTransform1(ele, attr, val) {
    if (!ele.transform) {
      ele.transform = {};
    }
    if (typeof val === "undefined") {
      if (typeof ele.transform[attr] === "undefined") {
        switch (attr) {
          case "scale":
          case "scaleX":
            ele.transform[attr] = 1;
            break;

          default:
            ele.transform[attr] = 0;
            break;
        }
      }
      return ele.transform[attr];
    } else {
      // 赋值阶段，并不是真正的赋值
      ele.transform[attr] = val; // 设置属性==>方便取值
      let transformVal = "";
      for (let s in ele.transform) {
        switch (s) {
          case "scale":
          case "scaleX":
          case "scaleY":
            transformVal += `${s}(${ele.transform[s]}) `;
            break;
          case "rotate":
          case "rotateX":
          case "rotateY":
          case "rotateZ":
            transformVal += `${s}(${ele.transform[s]}deg) `;
            break;
          default:
            transformVal += `${s}(${ele.transform[s]}px) `;
            break;
        }
        console.log(transformVal);
        ele.style.transform = transformVal;
      }
    }
  },
  /**
   * css中transform方法封装2.0
   * @param {Object} element transform需要加的dom元素
   * 全局调用 Utils.Public.cssTransform(element)
   * element.attr = 值
   */
  cssTransform(element) {
    console.log(element);
    if (element.style.transform) {
      return; // 已存在transform属性则无需再次添加
    }
    let units = {}, // 存储单位
      transform = "", // 拼接字符串
      transforms = {}, // 存储属性值
      attrs = [
        "translate",
        // "translateX",
        // "translateY",
        // "translateZ",
        // "translate3d",
        "scale",
        // "scaleX",
        // "scaleY",
        // "scaleZ",
        // "scale3d",
        "rotate"
        // "rotateX",
        // "rotateY",
        // "rotateZ",
        // "rotate3d"
      ]; // 存在可操作的属性
    attrs.forEach(function(attr) {
      if (attr.indexOf("scale") >= 0) {
        units[attr] = ""; // 处理单位
        transforms[attr] = 1; // 处理默认值
      } else {
        units[attr] = attr.indexOf("translate") >= 0 ? "px" : "deg";
        transforms[attr] = 0;
      }
      Object.defineProperty(element, attr, {
        get: function() {
          return transforms[attr];
        },
        set: function(value) {
          transform = "";
          transforms[attr] = value; // 属性赋值
          attrs.forEach(function(attr) {
            transform += `${attr}(${transforms[attr]}${units[attr]}) `; // 最终赋值
          });
          element.style.transform = transform;
        }
      });
    });
  }
};
