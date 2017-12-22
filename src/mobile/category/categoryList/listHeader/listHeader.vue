<template>
  <div class="list_header">
    <a href="#/home" class="btn_index">首页</a>
    <div v-for="cate in categorys" v-if="cate.id == currenSelect.id" class="list_category" @click="chooseCategory">{{cate.text}} <i class="fa fa-angle-down"></i></div>
    <div class="category_box" :class="{slide_down:isShow}">
      <ul>
        <li v-for="cate in categorys" :data-id="cate.id" @click="onSelect($event)" :class="[cate.id==currenSelect.id?'active':'']">{{cate.text}}</li>
      </ul>
    </div>
    <div class="mask" v-show="isShow" @click="onMask"></div>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapActions} from 'vuex'
  export default {
    data(){
      return {
        isShow: false,
        currenSelect:{
          id:0,
          text:'饮食'
        }
      }
    },
    computed: mapState(['categorys']),
    mounted() {
      this.currenSelect.id = this.$route.params.id;//1、先根据获取到的patams赋值给id,然后根据id渲染头部text
    },
    methods: {
      // 显示分类菜单函数
      chooseCategory(){
        this.isShow = true;
      },
      // 点击Mask消失函数
      onMask(){
        this.isShow = false;
      },
      // 选择商品分类
      onSelect(e) {
        this.$store.state.pageNum = 1;
        this.$store.state.searchLists = [];
        var val = e.target.getAttribute('data-id');//2、获取当前点击的li的data，
        this.$router.push({path:'/list/'+val,params:{'id':val}});//根据id跳转到响应的路由
        this.$store.dispatch('categoryList',val);
        this.$store.dispatch('category');
        this.currenSelect.id = val;
        this.isShow = false;
      }
    }
  }
</script>
<style scoped>
  .list_header {
    position: relative;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.6rem;
    background-color: #fff;
  }
  .list_header .btn_index {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding: 0 0.5rem;
    text-align: center;
    color: #999;
  }
  .list_header .list_category{
    width: auto;
    margin: 0 auto;
    text-align: center;
    color: #0aa082;
  }
  .list_header .category_box{
    position: fixed;
    top: -50%;
    left: 50%;
    z-index: 110;
    width: 10rem;
    height: 14rem;
    padding: 0.4rem 0;
    margin: -7rem 0 0 -5rem;
    border-radius: 0.1rem;
    background-color: #fff;
    box-shadow: 0 0 0.2rem #ccc;
    overflow: hidden;
    transition: top .5s ease 0s;
  }
  .list_header .slide_down{
    top: 50%;
  }
  .list_header .category_box ul{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list_header .category_box ul li{
    text-align: center;
    color: #666;
    font-size: 0.6rem;
  }
  .list_header .category_box ul li.active{
    background-color: #f0f0f0;
  }
  .list_header .mask{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>