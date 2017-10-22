<template>
  <div class="app">
    <ul class="component clearfix">
      <li><router-link to="/router-1">路由一号</router-link></li>
      <li><router-link :to="{'name':'Router_2'}">路由二号</router-link></li>
      <li><router-link :to="{'path':'/router-3',query:{'id':'1244','userId':'124235436'}}">路由三号</router-link></li>
    </ul>
    <router-view></router-view>
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
    export default {
      name: 'app',
    /**
    * @desc 注意，在template的Header、Footer标签代表了一个组件，
      在export default中需要把这些组件挂载到Vue实例上。
      因此，components里面写一个Header和一个Footers，这就引入了这两个组件
      */
      data:function(){
        return{
          // data里面写一个return，同时写当前组件中要用到的变量
        }
      },
      mounted:function(){
        //mounted是一个函数，代表着当前页面的所有HTML元素都已经加载完毕了，
        // 当前组件的HTML加载完毕之后，然后就会触发mounted里面的方法。
        // 例如，我在这个页面上需要操作DOM元素，
        // 每次进入这个页面我都希望去操作，就可以写在mounted里面
      },
      methods:{
        // methods是一个对象，里面写了各种方法，、
        //可以在当前组件里面写@click=某个方法，当点击了这个元素，这个方法就会被触发。
      }
    }
  </script>
  <style scoped>
    .app{
      width:100%;
      background-color:#f8f8fe;
    }
    ul>li{
      float:left;
      display: none;
    }
  </style>
