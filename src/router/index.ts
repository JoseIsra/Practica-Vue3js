import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Game from '@/views/Game.vue';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import Tasks from '@/views/Tasks.vue';

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
  {
    path: '/task',
    name: 'Tasks',
    component: Tasks,
    props: (route) => ({ name: route.query.name }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
