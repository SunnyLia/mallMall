<template>
    <div class="shopNav">
      <ul>
        <router-link :to="{path:'shopHome'}" tag="li">店铺首页</router-link>
        <router-link :to="{path:'shopAll'}" tag="li">全部商品</router-link>
        <router-link :to="{path:'/home'}" tag="li">市集首页</router-link>
      </ul>
    </div>
</template>
<style scoped>
  .shopNav{
   height: 1.6rem;
   line-height: 1.6rem;
   background-color: #fff;   
 }
 .shopNav ul li{
  float: left;
  width: 33.33%;
  text-align: center;
  font-size: 0.6rem;
}
.shopNav ul li.active{
  color: #0aa082;
}
</style>