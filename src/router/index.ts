import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue';
import SignInPage from '@/views/SignInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs'
  },
  {
    path: '/tabs',
    component: TabsPage,
    children:[
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'budget',
        component: () => import('@/views/BudgetPage.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  },
  {
    path: '/signin',
    component: SignInPage
  },
  {
    path: '/signup',
    component: SignUpPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
