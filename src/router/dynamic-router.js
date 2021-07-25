/*全部路由*/
import Order from '../views/order-mange'
import Orderlist from '../views/order-mange/orderlist'

import Goods from '../views/goods-mange'
import Goodslist from '../views/goods-mange/goodslist'

import Finance from '../views/finance-mange'
import Financelist from '../views/finance-mange/financelist'
import goodslist from "../views/goods-mange/goodslist";
import shouhouorder from "../views/order-mange/shouhouorder";

  const dynamicRouter = [
  {
    path: '/order',
    component: Order,
    name: 'order-mange',
    meta: {
      name: '订单管理',
    },
    children: [
      {
        path: 'orderlist',
        name: 'orderlist',
        component: Orderlist,
        meta: {
          name: '订单列表'
        },
        children: [
          {
            path: 'shouhoulist',
            name: 'shouhoulist',
            components: shouhouorder,
            meta:{
              name: '售后订单'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/goods',
    component: Goods,
    name: 'goods-mange',
    meta: {
      name: '商品管理'
    },
    children: [
      {
        path: 'goodslist',
        name: 'goodslist',
        component: Goodslist,
        meta: {
          name: '商品列表'
        }
      }
    ]
  },
  {
    path: '/finance',
    name: 'finance-mange',
    component: Finance,
    meta: {
      name: '财务管理'
    },
    children: [{
      path: 'financelist',
      name: 'financelist',
      component: Financelist,
      meta: {
        name: '财务管理列表'
      }
    }]
  }
]
export default dynamicRouter