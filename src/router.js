import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";

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

router.beforeEach((to, from, next) => {
  if (to.hash && !from.name && window.location.hash){
    next({path: '/home', replace: true});
  } else {
    next();
  }
});

export default router;
