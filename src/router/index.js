/**
 * @description  路由配置
 * 关于路由的配置都在这里写入
 */
 import Vue from 'vue'
 import Router from 'vue-router'

 import Search from '@/mobile/search/search.vue'
 import Category from '@/mobile/category/category.vue'//分类
 import Home from '@/mobile/home/home.vue'//首页
 import Mine from '@/mobile/mine/mine.vue'//我的
 import Cart from '../mobile/cart/cart.vue'//购物车
 import List from '@/mobile/category/categoryList/categoryList.vue'//分类列表/搜索列表
 import Detail from '../mobile/detail/detail.vue'//商品详情页
 import Login from '../mobile/login/login.vue'//登录
 import Register from '../mobile/login/register/register.vue'//注册
 import Order from '@/mobile/order/order.vue'
 import OrderAll from '@/mobile/order/orderList/orderAll/orderAll.vue'//全部订单
 import OrderBeReceive from '@/mobile/order/orderList/orderBeReceive/orderBeReceive.vue'//待收货订单
 import OrderObligation from '@/mobile/order/orderList/orderObligation/orderObligation.vue'//待付款订单
 import OrderPendShip from '@/mobile/order/orderList/orderPendShip/orderPendShip.vue'//待发货订单
 import ReturnExchange from '@/mobile/order/returnExchange/returnExchange.vue'//退换货
 import MyCupones from '@/mobile/mine/myCupones/myCupones.vue'
 import UnUsed from '@/mobile/mine/myCupones/cuponesList/unUsed.vue'//优惠券未使用
 import HasUsed from '@/mobile/mine/myCupones/cuponesList/hasUsed.vue'//优惠券已使用
 import HasExpire from '@/mobile/mine/myCupones/cuponesList/hasExpire.vue'//优惠券已过期
 import MyAddress from '@/mobile/mine/myAddress/myAddress.vue'//收货地址

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
    path:'/myAddress',//收货地址
    name:'MyAddress',
    component:MyAddress
  },
  {
    path:'/mine',//我的
    name:'Mine',
    component:Mine
  },
  {
    path:'/category',//分类
    name:'Category',
    component:Category
  },
  {
    path:'/cart',//购物车
    name:'Cart',
    component:Cart
  },
  {
    path:'/order',
    name:'Order',
    component:Order,
    children:[
    {
      path: 'orderAll',//全部订单
      name: 'OrderAll',
      component: OrderAll,
    },
    {
      path: 'orderBeReceive',//待收货订单
      name: 'OrderBeReceive',
      component: OrderBeReceive,
    },
    {
      path: 'orderObligation',//待付款订单
      name: 'OrderObligation',
      component: OrderObligation,
    },
    {
      path: 'orderPendShip',//待发货订单
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
      path: 'unUsed',//优惠券未使用
      name: 'UnUsed',
      component: UnUsed,
    },
    {
      path: 'hasUsed',//优惠券已使用
      name: 'HasUsed',
      component: HasUsed,
    },
    {
      path: 'hasExpire',//优惠券已过期
      name: 'HasExpire',
      component: HasExpire,
    }
    ]
  },
  {
    path: 'returnExchange',//退换货
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
    path:'/login',//登录
    name:'Login',
    component:Login
  },
  {
    path:'/register',//注册
    name:'Register',
    component:Register
  }
  ]
})
