/**
 * @description  路由配置
 * 关于路由的配置都在这里写入
 */
 import Vue from 'vue'
 import Router from 'vue-router'

 import Search from '@/mobile/search/search.vue'
 import Tab from '@/mobile/detail/tab/tab.vue'
 import Category from '@/mobile/category/category.vue'//分类
 import Home from '@/mobile/home/home.vue'//首页
 import Mine from '@/mobile/mine/mine.vue'
 import Cart from '../mobile/cart/cart.vue'
 import List from '@/mobile/category/categoryList/categoryList.vue'//分类列表/搜索列表
 import Detail from '../mobile/detail/detail.vue'//商品详情页
 import Login from '../mobile/login/login.vue'
 import Order from '@/mobile/order/order.vue'
 import OrderAll from '@/mobile/order/orderList/orderAll/orderAll.vue'
 import OrderBeReceive from '@/mobile/order/orderList/orderBeReceive/orderBeReceive.vue'
 import OrderObligation from '@/mobile/order/orderList/orderObligation/orderObligation.vue'
 import OrderPendShip from '@/mobile/order/orderList/orderPendShip/orderPendShip.vue'
 import ReturnExchange from '@/mobile/order/returnExchange/returnExchange.vue'
 import MyCupones from '@/mobile/mine/myCupones/myCupones.vue'
 import UnUsed from '@/mobile/mine/myCupones/cuponesList/unUsed.vue'
 import HasUsed from '@/mobile/mine/myCupones/cuponesList/hasUsed.vue'
 import HasExpire from '@/mobile/mine/myCupones/cuponesList/hasExpire.vue'
 import MyAddress from '@/mobile/mine/myAddress/myAddress.vue'
 import Register from '../mobile/login/register/register.vue'

 Vue.use(Router)
 export default new Router({
  linkActiveClass:'active',
  routes:[
  {
    path: '/',//首页
    name: 'Home',
    component: Home
  },
  {
    path:'/home',//首页
    name:'Home',
    component:Home
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },
  {
    path:'/myAddress',
    name:'MyAddress',
    component:MyAddress
  },
  {
    path:'/mine',
    name:'Mine',
    component:Mine
  },
  {
    path:'/category',//分类
    name:'Category',
    component:Category
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/order',
    name:'Order',
    component:Order,
    children:[
    {
      path: 'orderAll',
      name: 'OrderAll',
      component: OrderAll,
    },
    {
      path: 'orderBeReceive',
      name: 'OrderBeReceive',
      component: OrderBeReceive,
    },
    {
      path: 'orderObligation',
      name: 'OrderObligation',
      component: OrderObligation,
    },
    {
      path: 'orderPendShip',
      name: 'OrderPendShip',
      component: OrderPendShip,
    }
    ]
  },
  {
    path:'/myCupones',
    name:'MyCupones',
    component:MyCupones,
    children:[
    {
      path: 'unUsed',
      name: 'UnUsed',
      component: UnUsed,
    },
    {
      path: 'hasUsed',
      name: 'HasUsed',
      component: HasUsed,
    },
    {
      path: 'hasExpire',
      name: 'HasExpire',
      component: HasExpire,
    }
    ]
  },
  {
    path: 'returnExchange',
    name: 'ReturnExchange',
    component: ReturnExchange,
  },
  {
    path:'/list/:id',//分类列表/搜索列表
    name:'List',
    component:List
  },
  {
    path:'/detail',//商品详情
    name:'Detail',
    component:Detail
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  }
  ]
})
