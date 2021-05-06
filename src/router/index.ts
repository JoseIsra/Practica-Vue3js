import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Game from '@/views/Game.vue';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
