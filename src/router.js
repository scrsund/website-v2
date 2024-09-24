import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
// import AboutPage from "./pages/AboutPage.vue";
// import ContactPage from "./pages/ContactPage.vue";
// import StartPage from "./unused/StartPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
  ],
  scrollBehavior(to){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return {top: 0};
  },
});

export default router;
