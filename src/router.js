import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Results from "./views/Results.vue";
import Results2024 from "./views/Results2024.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/resultados", component: Results },
  { path: "/resultados2024", component: Results2024 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
