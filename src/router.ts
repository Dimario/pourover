import { createRouter, createWebHistory } from "vue-router";

import Mainpage from "@/pages/Mainpage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "mainpage",
      component: Mainpage,
    },
  ],
});
