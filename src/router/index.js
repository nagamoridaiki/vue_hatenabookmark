import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sign_up",
      name: "sign_up",
      component: SignUp
    },
    {
      path: "/sign_in",
      name: "sign_in",
      component: SignIn
    },

  ]
});