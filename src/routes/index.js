import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import TaskList from "@/views/TaskList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: HomePage,
    },
    {
      path: "/tasks",
      name: "tasks-list",
      component: TaskList,
    },
  ],
});

export default router;
