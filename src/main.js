// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/css/base.less";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Utils from "./utils"; // 全局公共方法
import globelComponents from "./components/index.js";
globelComponents();
Vue.use(ElementUI);
Vue.config.productionTip = false;
window.Utils = Utils;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
