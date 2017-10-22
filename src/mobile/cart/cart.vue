<template>
  <div class="cart">
    <headers></headers>
    <navs></navs>
    <div class="login">
      <div class="login_false">还未登录,请使用豆瓣账号登录</div>
      <div class="login_entry">
        <p class="login_tip2">登录豆瓣账号后，可以进行订单查询，使用优惠券</p>
        <a href="#/login" class="btn_login">登录</a>
        <p class="btn_regist">没有豆瓣账号?<a href="#">注册</a></p>
      </div>
      <div class="anonymous">
        <p>使用匿名购买，则可以点击以下链接查询订单</p>
        <p><a href="#">查询订单</a></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  import Headers from '../../components/Header.vue'
  import Navs from '../../components/Nav.vue'

  export default {
    components: {
      Headers,
      Navs
    }
  }
</script>
<style scoped>
  .login{
    font-size: 0.6rem;
    text-align: center;
  }
  .login .login_false{
    padding: 1.5rem 0;
    border-bottom: 1px solid #9d9d9d;
    background-color: #f8f8fe;
  }
  .login .login_entry{
    padding: 0.8rem;
    text-align: center;
    border-bottom: 1px solid #9d9d9d;
    background-color: #fff;
  }
  .login .login_entry .login_tip2{
    color: #4a4a4a;
  }
  .login .login_entry .btn_login{
    display: block;
    padding: 0.4rem 0;
    text-align: center;
    margin: 0.8rem 0;
    color: #fff;
    font-size: 0.6rem;
    border-radius: 0.2rem;
    background-color: #68cb78;
  }
  .login .login_entry .btn_regist{
    color: #9d9d9d;
  }
  .login .login_entry .btn_regist a{
    color: #68cb78;
  }
  .login .anonymous{
    text-align: center;
    color: #9b9b9b;
    padding-top: 4rem;
    background-color: #fff;
  }
  .login .anonymous p{
    padding: 5px 0;
  }
  .login .anonymous a{
    color: #68cb78;
  }
</style>