// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'  
import router from './router/index'
import store from './store/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import def_lazy_img from './assets/imgs/loading.gif'
import Scroll from 'vue-infinite-scroll'
import axios from 'axios'


require("./assets/css/style.css")
require("./assets/css/fonts.css")
require("./assets/js/rem.js")
require("./assets/js/jquery-1.10.1.js")

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{loading:def_lazy_img})
Vue.use(Scroll)

//  Vue本身是一个构造函数，因此可以通过prototype给这个构造函数进行增加其属性
//  例如，Vue.prototype.GLOBAL = require(xxx.js)，这样就扩展了Vue的原型方法，
//  需要注意，扩展时，xxx.js的末尾需要将本js文件中需要的方法进行向外提供，
//  例如说xxx.js里面有个叫做abc的function，要向外提供，就写成export {abc}
//  接着在main.js里面写一个Vue.prototype.GLOBAL = require(xxx.js)之后，na
//  然后在vue组件中，用this.GLOBAL.abc即可访问到xxx.js中的abc方法

Vue.prototype.$http = axios
Vue.config.productionTip = false
//设置默认打开的页面,但是一刷新就会跳转到这个页面
// router.replace('home')

/* eslint-disable no-new */
new Vue({
  el: '#component',
  router,
  store,
  template: '<App/>',
  components: { App }
})
