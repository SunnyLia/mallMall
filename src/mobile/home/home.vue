<template>
  <div class="home">
    <Headers></Headers>
    <Navs></Navs>
    <Slider></Slider>
    <Shop></Shop>
    <List></List>
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
    import Headers from '../../components/Header.vue'
    import Footers from '../../components/Footer.vue'
    import Navs from '../../components/Nav.vue'
    import Slider from '../../mobile/slide/slider.vue'
    import List from '../../mobile/list/list.vue'
    import Shop from '../../mobile/shop/shop.vue'
    export default {
      components: {
        Headers,
        Footers,
        Navs,
        Slider,
        List,
        Shop
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
