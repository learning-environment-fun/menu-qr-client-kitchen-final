import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OrdersIndex from './views/OrdersIndex.vue'
import StatisticsPage from './views/StatisticsPage.vue'

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
      path: '/orders',
      name: 'orders',
      component: OrdersIndex
    },
    {
      path: '/fruits',
      name: 'fruits',
      component: StatisticsPage
    }
  ]
})
