import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ListsView from '../views/lists/ListsView.vue'
import RecomendationsView from '../views/lists/RecomendationsView.vue'
import TopView from '../views/lists/TopView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/lists',
    name: 'lists',
    component: ListsView
  },
  {
    path: '/lists/recomendations',
    name: 'recomendations',
    component: RecomendationsView
  },
  {
    path: '/lists/top',
    name: 'top',
    component: TopView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;