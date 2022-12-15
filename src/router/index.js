import { createRouter, createWebHashHistory } from 'vue-router'
import performanceView from '../views/performance.vue'

const routes = [
  {
    path: '/',
    name: 'performanceView',
    component: performanceView
  },
  {
    path: '/news',
    name: 'newsPage',
    component: () => import('../views/newsPage.vue')
  },
  {
    path: '/newsDetailPage/:id',
    name: 'newsDetailPage',
    component: () => import('../views/newsDetailPage.vue'),
    props: true
  },
  {
    path: '/newsVue3',
    name: 'newsPageVue3',
    component: () => import('../views/newsPageVue3.vue')
  },
  {
    path: '/newsDetailPageVue3/:id',
    name: 'newsDetailPageVue3',
    component: () => import('../views/newsDetailPageVue3.vue'),
    props: true
  },
  {
    path: '/coupon',
    name: 'couponView',
    component: () => import('../views/couponSharing.vue')
  },
  {
    path: '/poblic',
    name: 'poblicWelfare',
    component: () => import('../views/poblicWelfare.vue')
  },
  {
    path: '/poblic/:post_id',
    name: 'poblicWelfareId',
    component: () => import('../views/poblicWelfareId.vue')
  },
  {
    path: '/social',
    name: 'socialImpact',
    component: () => import('../views/socialImpact.vue')
  },
  {
    path: '/about',
    name: 'aboutView',
    component: () => import('../views/aboutView.vue')
  },
  {
    path: '/performance',
    name: 'performance',
    component: () => import('../views/performance.vue')
  },
  {
    path: '/testPage',
    name: 'testPage',
    component: () => import('../views/testPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
