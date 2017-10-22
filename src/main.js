// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 *@desc main.js用来进行项目的配置，是项目的入口文件，
 *index.html中的所有内容都是从main.js加入的
 *作用：引入主入口文件，例如App.vue
 *引入需要用到的插件，例如bootstrap，例如jquery，例如通用样式common.css
 *进行一些全局变量的配置，例如ajax全局拦截器
 */
 import Vue from 'vue'
import App from './App'   //1、在vue-cli中App.vue是所有组件的入口组件
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import def_lazy_img from './assets/imgs/loading.gif'
import Scroll from 'vue-infinite-scroll'
import axios from 'axios'

require("./assets/css/style.css")
require("./assets/css/fonts.css")
require("../src/assets/js/rem.js")
require("../src/assets/js/jquery-1.10.1.js")

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload,{loading:def_lazy_img})
Vue.use(Scroll)

// Vue.prototype.$http = axios;/
//2、引入通用的样式，例如common.css，用require即可
//3、如果有一些js文件需要引入，也是用require，require("./xxx/yyy.js")
//4、Vue本身是一个构造函数，因此可以通过prototype给这个构造函数进行增加其属性
//  例如，Vue.prototype.GLOBAL = require(xxx.js)，这样就扩展了Vue的原型方法，
//* 需要注意，扩展时，xxx.js的末尾需要将本js文件中需要的方法进行向外提供，
//  例如说xxx.js里面有个叫做abc的function，要向外提供，就写成export {abc}
//  接着在main.js里面写一个Vue.prototype.GLOBAL = require(xxx.js)之后，na
//  然后在vue组件中，用this.GLOBAL.abc即可访问到xxx.js中的abc方法
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#component',
  router,
  template: '<App/>',
  components: { App }
})
