
import { createRouter, createWebHistory } from 'vue-router';
import Dashbroad from '../pages/Dashbroad.vue'
import User from '../pages/User.vue'
const routes = [
  { path: '/', component: Dashbroad },
  { path: '/user', component: User },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
