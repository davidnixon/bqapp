import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome-page",
      component: () =>
        import(/* webpackChunkName: "welcome-page" */ "./views/LandingPage"),
    },
    {
      path: "/about",
      name: "about-page",
      component: () =>
        import(/* webpackChunkName: "about-page" */ "./views/AboutPage"),
    },
  ],
});
