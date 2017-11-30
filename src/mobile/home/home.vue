<template>
  <div class="home">
    <headers></headers>
    <navs></navs>
    <swiper></swiper>
    <hot-products></hot-products>
    <hot-shops></hot-shops>
  </div>
</template>

<script>
  /**
  *  @desc App.vue作为所有组件的入口
    其中，写入的router-view是一个路由的展示区，router-link是路由的切换按钮，
        例如tab栏，每一个tab的按钮都写一个router-link，router-view会相应的改变。
        * router-link的内容会合router文件夹里面的index.js相关
    写入的组件引用，用于通用组件使用，即所有页面都会引用的组件，例如为header和footer
    */
    import Headers from '@/components/header/Header.vue'
    import Footers from '@/components/footer/Footer.vue'
    import Navs from '@/components/nav/Nav.vue'
    import Swiper from '@/mobile/home/swiper/swiper.vue'
    import HotProducts from '@/mobile/home/hotProducts/hotProducts.vue'
    import HotShops from '@/mobile/home/hotShops/hotShops.vue'
    export default {
      components: {
        Headers,
        Footers,
        Navs,
        Swiper,
        HotProducts,
        HotShops
      },
      data:function(){
        return{}
      },
      mounted:function(){},
      methods:{}
    }
  </script>
  <style scoped>
   
  </style>
