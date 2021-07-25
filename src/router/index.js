import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/Home'
import NotFound from '../views/errpages/404'
import Forbidden from '../views/errpages/403'
import Layout from '../views/layout'
Vue.use(VueRouter)

//初始化路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ]

//准备动态路由
/*根据用户的权限不同 所看到的页面和可操作性也不同*/
export const DynamicRoutes = [
  {
    path:'',
    component: Layout,
    redirect: "Home",
    meta: {
      requiresAuth: true,
      name:"首页"
    },
    children: [
      {
        path: "/home",
        component:Home,
        name: "home",
        meta: {
          name: "首页"
        }
      }
    ]
  },
  {
    path: "/403",
    component: Forbidden
  },
  {
    path: "*",
    component: NotFound
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
