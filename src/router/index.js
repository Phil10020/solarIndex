import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'newsPage',
    component: () => import('../views/newsPage.vue')
  },
  {
    path: '/coupon',
    name: 'couponView',
    component: () => import('../views/couponSharing.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
