import Vue from 'vue'
import firebase from 'firebase/app'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      exact: true,
      name: 'Home',
      meta: {auth: true},
      component: () => import('../views/Home.vue')
   },
   {
      path: '/settings',
      name: 'Settings',
      meta: {auth: true},
      component: () => import('../views/Settings.vue')
   },
   {
      path: '/login',
      name: 'Login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login.vue')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

// GUARDS
router.beforeEach((to, from, next) => {
   const currentUser = firebase.auth().currentUser
   const requireAuth = to.matched.some(record => record.meta.auth)

   if (currentUser) { // if authenticated user tries to go to login page manually
      if (!requireAuth && !to.query.logout) {
         next('/')
      } else {
         next()
      }
   } else { // if unauthenticated user tries to go to guarded page manually
      if(requireAuth) {
         next('/login')
      } else {
         next()
      }
   }
})

export default router
