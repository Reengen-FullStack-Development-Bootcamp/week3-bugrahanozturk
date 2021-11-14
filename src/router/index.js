import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/Home";
import Logs from "../pages/Logs";

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/admin/logs", component: Logs },
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

export default router;
