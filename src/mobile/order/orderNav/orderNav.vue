<template>
  <div class="orderNav">
    <ul class="clearfix">
      <li><router-link :to="{name:'OrderAll'}"><span>全部</span></router-link></li>
      <li><router-link :to="{name:'OrderObligation'}"><span>待付款</span></router-link></li>
      <li><router-link :to="{name:'OrderPendShip'}"><span>待发货</span></router-link></li>
      <li><router-link :to="{name:'OrderBeReceive'}"><span>待收货</span></router-link></li>
    </ul>
  </div>
</template>

<style scoped>
  .orderNav ul{
    background-color: #fff;
    width: 100%;
    height: 1.6rem;
    line-height: 1.6rem;
  }
  .orderNav ul li{
    width: 25%;
    float: left;
    height: 100%;
    text-align: center;
  }
  .orderNav ul li a{
    font-size: 0.6rem;
    display: inline-block;
  }

  a.active{
    color: #0aa082;
    border-bottom: 1px solid #0aa082;
  }
  
</style>