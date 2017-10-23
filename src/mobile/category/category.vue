<template>
  <div class="category">
    <Headers></Headers>
    <Navs></Navs>
    <div class="category_list">
      <ul>
        <li v-for="cty in categorys">
          <router-link :to="cty.url" :class="cty.class_name">{{cty.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Headers from '../../components/Header.vue'
  import Navs from '../../components/Nav.vue'
  export default{
    data(){
      return{
        categorys:[
        {text:"饮食",url:"/list/1",class_name:"red"},
        {text:"服装",url:"/list/2",class_name:"blue"},
        {text:"配饰",url:"/list/3",class_name:"purple"},
        {text:"包袋",url:"/list/4",class_name:"sky"},
        {text:"鞋靴",url:"/list/5",class_name:"yellow"},
        {text:"护肤",url:"/list/6",class_name:"pink"},
        {text:"家居",url:"/list/7",class_name:"grass"},
        {text:"时间",url:"/list/8",class_name:"green"},
        {text:"数码",url:"/list/9",class_name:"red"}
        ]
      }
    },
    components:{
      Headers,
      Navs
    }
  }
</script>
<style scoped>
  .category_list{
    font-size: 0;
    text-align: center;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
  }
  .category_list ul li{
    display: inline-block;
    width: 33.3%;
    height: 2.5rem;
    padding: 0 0.1rem;
    margin: 0.1rem 0;
  }
  .category_list a{
    display: block;
    line-height: 2.5rem;
    text-align: center;
    color: #4a4a4a;
    font-size: 0.6rem;
    border-radius: 0.2rem;
  }
  .category_list .red{
    background-color: #ffb2bb;
  }
  .category_list .blue{
    background-color: #89b7ec;
  }
  .category_list .purple{
    background-color: #c2a0e0;
  }
  .category_list .sky{
    background-color: #b2e6ff;
  }
  .category_list .yellow{
    background-color: #e6e7a4;
  }
  .category_list .pink{
    background-color: #e0a0d1;
  }
  .category_list .grass{
    background-color: #b2ffc5;
  }
  .category_list .green{
    background-color: #ffb2bb;
  }
</style>