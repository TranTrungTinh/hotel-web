import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/*
  @tip
  // it defaul is default-layout
  meta: { layout: 'admin' }, // this mean is admin-layout
*/
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/pages/home.vue").default // load sync home
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("@/pages/about-us.vue")
    }
  ]
});
