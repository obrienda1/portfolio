import { createRouter as _createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';

// Create routes
const routes = [
  {
    path: "/not-found",
    name: "NotFoundView",
    component: NotFoundView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: routes
  })
}
