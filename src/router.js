import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import {beforeEnterLogin} from './lib/route-guard/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/SearchGym.vue')
    }
  ]
})
