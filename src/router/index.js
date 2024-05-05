import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OauthView from '@/views/OauthView.vue'
import LoginView from '@/views/LoginView.vue'
import { useTokenStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/oauth',
      name: 'oauth',
      component: OauthView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const logined = useTokenStore()
    if (!logined.token) {
      router.push('/login')
    }
  }
})

export default router
