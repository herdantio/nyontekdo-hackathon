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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    ,
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/place/PlaceDetail')
    }
  ]
})
