import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/ArchivePage.vue"),
    props: true,
  },
  {
    path: "/tags",
    component: () => import("@/views/Tags.vue"),
    props: true,
  },
  {
    path: "/:section",
    component: () => import("@/views/ArchivePage.vue"),
    props: true,
  },
  {
    path: "/tags/:tag",
    component: () => import("@/views/ArchivePage.vue"),
    props: true,
  },
  {
    path: "/:section/:id",
    component: () => import("@/views/PostPage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      document.getElementById("app")?.scrollIntoView();
      return { el: "#app" };
    }
  },
});

export default router;
