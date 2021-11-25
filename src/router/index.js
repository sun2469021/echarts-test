import Vue from "vue";
import Router from "vue-router";
import SingBar from "@/page/Bar/singleBar.vue";
import SingLine from "@/page/Line/singleLine.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/singBar"
    },
    {
      path: "/bar",
      name: "SingBar",
      component: SingBar
    },
    {
      path: "/line",
      name: "SingLine",
      component: SingLine
    }
  ]
});

export default router;
