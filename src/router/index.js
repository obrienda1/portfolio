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
    component: NotFoundView
  },
  {
    path: '/portfolio',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  }
];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}
