import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
router.beforeEach((to, form, next, from) => {
  if (!store.state.UserToken){
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)){
      next()
    }else
    {
      next({
        path: '/login'
      })
    }
  }
  else
  {
   if (!store.state.permissionList){
     console.log('调用FETCH_PERMINSSION')
     store.dispatch("FETCH_PERMINSSION").then(()=>{
       next({
         path:to.path
       })
     })
   }
   else {
     //store存在权限
     if (to.path !== "/login"){
       next()
     }
     else {
       next(from.fullPath)
     }
   }
  }
})
Vue.use(Antd)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
