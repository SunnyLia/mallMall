<template>
  <div class="mineHeader">
  <div class="back">
      <router-link :to="{name:'Mine'}"><i class="fa fa-angle-left"></i></router-link>
    </div>
    <div class="title"><span>{{title}}</span></div>
    <div class="home">
      <router-link :to="{name:'Home'}"><img src="../../../assets/imgs/home.png" alt=""></router-link>
    </div>
  </div>
</template>
<script>
 export default {
  data() {
    return {      
    }
  },
  props:['title'],
  mounted() {  
  }
}
</script>
<style scoped>
  .mineHeader{
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: #0aa082;
    padding:0 0.5rem;
    display: -webkit-flex;
    display: flex;
  }
  .mineHeader .back i{
    color: #fff;
    padding: 0 0.3rem;
    font-size: 1rem;
  }
  .mineHeader .back{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    text-align: left;
  }
  .mineHeader .title{
    color: #fff;
    text-align: center;
    font-size: 0.6rem;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
  }
  .mineHeader .home{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    text-align: right;
  }
  .mineHeader .home img{
   width: 1rem;
   height: auto;
 }
</style>