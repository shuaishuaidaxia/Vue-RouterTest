import Vue from 'vue'
import Vuex from 'vuex'
import {DynamicRoutes} from "../router";
import router from "../router";
import {recursionRouter, setDefultRoute} from "../utils/recursion-router";
import dynamicRouter from "../router/dynamic-router";
import {fetchPermission} from "../api";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    get UserToken(){
      return localStorage.getItem('token')
    },
    set UserToken(value){
      localStorage.setItem('token',value)
    },
    permissionList: null,
    sidebarMenu:[], //导航菜单
    currentMenu:'', //高亮,
    isSidebarNavCollapse: ''
  },
  mutations: {
    LOGIN_IN(state,token){
      state.UserToken = token
    },
    LOGIN_OUT (state){
      state.UserToken = ''
    },
    SET_PERMISSION(state,routes){
      state.permissionList = routes
    },
    CLEAR_PERMISSION(state){
      state.permissionList = null
    },
    SET_MENU(state,menu){
      state.sidebarMenu = menu
    },
    CLEAR_MENU(state){
      state.sidebarMenu = []
    }
  },
  actions: {
    async FETCH_PERMINSSION ({commit,state}) {
       console.log('aaa','FETCH_PERMINSSION')
      let perminssionlist = await fetchPermission()
        console.log(perminssionlist)
      //筛选
      //
      let routes =  recursionRouter(perminssionlist,dynamicRouter)  //后端返回的权限路由表和全部的路由表对比 过滤筛选
       console.log(routes,'后端返回的权限路由表和全部的路由表对比 过滤筛选')
      let Maincontainer = DynamicRoutes.find(v => v.path === "") //默认路由表 筛选出来的表 加入到默认路由表的/chinderen中
      let chindren = Maincontainer.children
      console.log( Maincontainer.children)
      chindren.push(...routes)
      console.log(chindren)
      //生成菜单
      commit("SET_MENU",chindren)
      //设置默认路由
      setDefultRoute([Maincontainer])
      //初始化路由
      let initialRoutes = router.options.routes   //获取初始路由
      router.addRoutes(DynamicRoutes)
      commit("SET_PERMISSION",[...initialRoutes,...DynamicRoutes])
      console.log(perminssionlist)
    }
  },
  modules: {
  }
})
