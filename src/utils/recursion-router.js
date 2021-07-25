/*
* 1.对比路由权限
* 2.指定返回的默认路由
* */
/**
 *
 * @param {Array} userRouter 后台请求的json格式权限表
 * @param {Array} allRouter  定义的所有路由表
 * @returns {Array} realRouters 过滤之后的符合条件的路由 你
 */
export function recursionRouter(userRouter = [],allRouter =[])
{
  console.log('调用recursionRouter')
  console.log(userRouter)
  console.log(userRouter,allRouter,'过滤')
     let realRouters = []
  allRouter.forEach((v,i)=>{
    console.log(v,'vv')
    userRouter.forEach((item,index)=>{
      console.log(item,'it')
      if (item.name === v.meta.name){
         if (item.children && item.children.length>0)
         {
           v.children = recursionRouter(item.children,v.children)
         }
         realRouters.push(v)
      }
    })
  })
  console.log(realRouters,'过滤后的路由')
  return realRouters
}

  export  function setDefultRoute(routes){
    console.log('调用了setDefulroute')
  routes.forEach((v,i) =>{
    if (v.children && v.children.length > 0)
    {
      v.redirect = {name: v.children[0].name}
      setDefultRoute(v.children)
    }
  })
  }