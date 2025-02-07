import { createRouter as _createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ProjectsView from '../views/ProjectsView.vue';

// Create routes
const routes = [
  {
    path: "/not-found",
    name: "NotFoundView",
    component: NotFoundView,
  },
  {
    path: '/portfolio',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
  },
  {
    path: '/bingo',
    name: 'Bingo',
    beforeEnter() {
      window.location.href = '/portfolio/JavaBlueBingo.html'
    },
  },
  {
    path: '/brick-break',
    name: 'BrickBreak',
    beforeEnter() {
      window.location.href = '/portfolio/BrickBreak.html'
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router
// export function createRouter () {
//   return _createRouter({
//     history: createWebHistory(),
//     routes: routes
//   })
// }
