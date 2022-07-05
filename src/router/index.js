import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginC from '../components/LoginC'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginC }
  ]
})

export default router
