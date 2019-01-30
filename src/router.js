import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {path:'/main',component:Main},
    {path:'/login',component:Login},
    {path:'*',component:NotFound}
  ]
})
