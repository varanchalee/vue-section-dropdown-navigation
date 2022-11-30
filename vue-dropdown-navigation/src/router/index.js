import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/App.vue'
import Features from '@/components/FeaturesMenu.vue'
import Company from '@/components/CompanyMenu.vue'
import Careers from '@/components/CareersMunu.vue'
import About from '@/components/AboutMenu.vue'
import Login from '@/components/LoginMenu.vue'
import Register from '@/components/RegisterMenu.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Features',
      name: 'Features',
      component: Features
    },
    {
      path: '/Company',
      name: 'Company',
      component: Company
    },
    {
      path: '/Careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
