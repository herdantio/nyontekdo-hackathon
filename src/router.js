import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import {beforeEnterLogin, beforeEnter} from './lib/route-guard/index'
import store from "@/store";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:(to, from, next) => {
        if (store.state.user) {
          next('/search')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
      beforeEnter: beforeEnterLogin
    },
    ,
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/place/PlaceDetail'),
      beforeEnter: beforeEnter
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/SearchGym.vue'),
      beforeEnter: beforeEnter
    }
  ]
})
