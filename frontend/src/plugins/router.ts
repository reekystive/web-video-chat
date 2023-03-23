import * as VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('../views/About.vue') },
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})
