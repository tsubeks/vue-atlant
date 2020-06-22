import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/desk",
      component: () => import("./views/Desk"),
    },
    {
      path: "/transactions",
      component: () => import("./views/Transactions"),
    },
  ],
});
