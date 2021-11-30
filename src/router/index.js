import Vue from "vue";
import Router from "vue-router";
import Demo from "@/page/Bar/demo.vue";
import SingLine from "@/page/Line/singleLine.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/bar"
    },
    {
      path: "/bar",
      name: "SingBar",
      component: Demo
    },
    {
      path: "/line",
      name: "SingLine",
      component: SingLine
    }
  ]
});

export default router;
