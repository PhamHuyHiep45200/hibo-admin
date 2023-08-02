
import { createRouter, createWebHistory } from "vue-router";
import Dashbroad from "../pages/Dashbroad.vue"
import User from "../pages/User.vue"
import Chart from "../pages/Chart.vue"
const routes = [
  { path: "/", component: Dashbroad },
  { path: "/user", component: User },
  { path: "/chart", component: Chart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
