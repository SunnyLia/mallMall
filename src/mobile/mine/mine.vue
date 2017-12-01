<template>
  <div class="my">
    <header-bar></header-bar>
    <nav-bar></nav-bar>
    <div class="db_mine">
      <div class="mine_info">
        <img src="../../assets/imgs/user_large.jpg" alt="">
        <p>张张你大爷</p>
      </div>
      <div class="mine_item">
        <div class="item">
          <a href="#/order/orderAll" class="clearfix">
            <p>查看全部订单</p>
            <i class="fa fa-angle-left"></i>
          </a>
        </div>
        <div class="order">
          <ul class="clearfix">
            <li><router-link :to="{name:'OrderObligation'}">待付款</router-link></li>
            <li><router-link :to="{name:'OrderPendShip'}">待发货</router-link></li>
            <li><router-link :to="{name:'OrderBeReceive'}">待收货</router-link></li>
            <li><router-link :to="{name:'ReturnExchange'}">退换货</router-link></li>
          </ul>
        </div>
        <div class="item">
          <router-link :to="{name:'UnUsed'}" class="clearfix">
          <p>我的优惠券</p>
          <i class="fa fa-angle-left"></i>
        </router-link>
      </div>
      <div class="item">
        <router-link :to="{name:'MyAddress'}" class="clearfix">
        <p>收货地址管理</p>
        <i class="fa fa-angle-left"></i>
      </router-link>
    </div>
  </div>
  <div class="loginOut">
    <a href="#">退出登录</a>
  </div>
</div>
</div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import HeaderBar from '@/components/header/Header.vue'
  import NavBar from '@/components/nav/Nav.vue'

  export default {
    data() {
      return {      
      }
    },
    mounted() {  
    },    
    methods: {
    },
    components: {
      HeaderBar,
      NavBar
    }
  }
</script>
<style scoped>
  .loginOut {
    text-align: center;
    line-height: 3rem;
    font-size: 0.6rem;
  }
  .db_mine .mine_info{
    text-align: center;
    margin: 1rem 0;
  }
  .db_mine .mine_info img{
    width: 3.5rem;
    height: auto;
    border-radius: 50%;
  }
  .db_mine .mine_info p{
    font-size: 0.6rem;
    color: #000;
    margin-top: 0.5rem;
  }
  .db_mine .mine_item .order{
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    height: 2.2rem;
    padding: 0.5rem 0;
  }
  .db_mine .mine_item .order ul{
    height: 100%;
    width: 100%;
  }
  .db_mine .mine_item .order li{
    float: left;
    width: 25%;
    height: 100%;
    line-height: 0.8rem;
    text-align: center;
    border-right: 1px solid #bdbdbd;
  }
  .db_mine .mine_item .order li:last-child{
    border-right: 0;
  }
  .db_mine .mine_item .order li a {
    font-size: 0.6rem;
  }
  .db_mine .mine_item .item{
    padding: 0 0.6rem;
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
  }
  .db_mine .mine_item .item a p{
    font-size: 0.6rem;
    float: left;
  }
  .db_mine .mine_item .item a i{
    float: right;
    margin-top: 0.55rem;
    font-size: 0.9rem;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }
</style>