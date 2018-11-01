import Vue from 'vue'
import Router from 'vue-router'

import Mainpage from '@/components/MainPage'
import Login from '@/components/LoginPage'
import Register from '@/components/Register'
import Viewname from '@/components/ViewName'
import Viewemail from '@/components/ViewEmail'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: Mainpage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'loginpage',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/name',
      name: 'view-name',
      component: Viewname,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/email',
      name: 'view-email',
      component: Viewemail,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
