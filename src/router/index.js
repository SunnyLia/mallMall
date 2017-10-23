/**
 * @description  路由配置
 * 关于路由的配置都在这里写入
 */
 import Vue from 'vue'
 import Router from 'vue-router'

 // import Router_1 from '../components/index_router/Router-1.vue'
 // import Router_2 from '../components/index_router/Router-2.vue'
 // import Router_3 from '../components/index_router/Router-3.vue'
 // import Router_1_child_1 from '../components/index_router/Router-1_child_1.vue'

 import Tab from '../mobile/tab/tab.vue'
 import Category from '../mobile/category/category.vue'
 import Home from '../mobile/home/home.vue'
 import Cart from '../mobile/cart/cart.vue'
 import List from '../mobile/cateList/cateList.vue'
 import Detail from '../mobile/detail/detail.vue'
 import Login from '../mobile/login/login.vue'

 Vue.use(Router)
 export default new Router({
  linkActiveClass:'active',
  routes:[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  },
  {
    path:'/cart',
    name:'Cart',
    component:Cart
  },
  {
    path:'/list/:id',
    name:'List',
    component:List
  },
  {
    path:'/detail/:id',
    name:'Detail',
    component:Detail
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
  ]
  // routes: [
  // {
  //   path: '/router-1',
  //   name: 'Router_1',
  //   component: Router_1,
  //   children:[
  //   {
  //     path: 'zhangsan',
  //     name: 'Zhangsan',
  //     component: Router_1_child_1,
  //   }
  //   ]
  // },{
  //   path: '/router-2',
  //   name: 'Router_2',
  //   component: Router_2
  // },{
  //   path: '/router-3',
  //   name: 'Router_3',
  //   component: Router_3
  // },{
  //   path: '/tab',
  //   name: 'Tab',
  //   component: Tab
  // }
  // ]
})
