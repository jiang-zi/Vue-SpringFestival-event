import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import reg from '../views/reg'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: login },
  { path: '/reg', component: reg }
]

const router = new VueRouter({
  routes
})

export default router
