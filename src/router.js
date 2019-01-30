import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import Setting from './views/Setting.vue'
import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import CategoryAdd from './views/CategoryAdd.vue'
import CategoryUpdate from './views/CategoryUpdate.vue'
import CategoryList from './views/CategoryList.vue'
import CategoryDelete from './views/CategoryDelete.vue'
import DishList from './views/DishList.vue'
import DishAdd from './views/DishAdd.vue'
import DishDelete from './views/DishDelete.vue'
import DishUpdate from './views/DishUpdate.vue'
import OrderList from './views/OrderList.vue'
import Security from './views/Security.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {path:'/main',
    component:Main,
    children:[
      {path:'/settings',component:GlobalSettings},
      {path:'/table/list',component:TableList},
      {path:'/table/add',component:TableAdd},
      {path:'/table/delete',component:TableDelete},
      {path:'/category/update',component:CategoryUpdate},
      {path:'/category/add',component:CategoryAdd},
      {path:'/category/list',component:CategoryList},
      {path:'/category/delete',component:CategoryDelete},
      {path:'/dish/list',component:DishList},
      {path:'/dish/add',component:DishAdd},
      {path:'/dish/delete',component:DishDelete},
      {path:'/dish/update',component:DishUpdate},
      {path:'/order/list',component:OrderList},
      {path:'/security',component:Security}
    ]
  },
    {path:'/login',component:Login},
    {path:'/settings',component:Setting},
    {path:'*',component:NotFound}
  ]
})
