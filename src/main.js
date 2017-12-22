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
Vue.use(VueLazyload,{
  loading:def_lazy_img,
  error:'../../../../static/imgs/default.png'
})
Vue.use(Scroll)

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
