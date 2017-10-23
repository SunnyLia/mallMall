<template>
  <div class="db_login">
    <div class="db_login_top"><a href="javascript:void(0);" class="cancel" @click="goBack">取消</a>登录豆瓣</div>
    <div class="db_login_form">
      <form action="#" method="post">
        <p class="form_item"><input type="text" name="username" placeholder="邮箱/手机号/用户名"></p>
        <p class="form_item"><input type="password" name="pasword" placeholder="密码"></p>
        <p class="form_btn"><button type="submit">登 录</button></p>
      </form>
    </div>
    <div class="login_other">使用其它方式登录 & 找回密码</div>
    <div class="regist_download">
      <a href="#">注册豆瓣</a><a href="#">下载豆瓣APP</a>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    methods: {
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  .db_login {
    font-size: 0.6rem;
  }
  .db_login .db_login_top{
    position: relative;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    color: #333;
    font-weight: 600;
    border-bottom: 1px solid #f0f0f0;
  }
  .db_login .db_login_top .cancel{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    padding: 0 0.6rem;
    color: #42bd56;
    font-size: 0.6rem;
    font-weight: normal;
  }
  input{
    font-size: 0.6rem;
  }
  .db_login .db_login_form{
    padding: 0.6rem 0.5rem;
  }
  .db_login .db_login_form .form_item{
    height: 1.8rem;
    line-height: 1.8rem;
    padding: 0 0.4rem;
    margin-bottom: -1px;
    box-sizing: border-box;
    border: 1px solid #e0e0e0;
  }
  .db_login .form_item:nth-of-type(1){
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .db_login .form_item:nth-of-type(2){
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .db_login .db_login_form input{
    border: none;
  }
  .db_login .db_login_form .form_btn{
    margin-top: 1rem;
  }
  .db_login .form_btn button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    color: #fff;
    font-size: 0.7rem;
    background-color: #17AA52;
    border-radius: 0.2rem;
  }
  .db_login .login_other{
    color: #9d9d9d;
    text-align: center;
    margin: 0.5rem 0 0.6rem 0;
  }
  .db_login .regist_download{
    text-align: center;
  }
  .db_login .regist_download a{
    color: #42bd56;
    font-size: 0.6rem;
    margin: 0 0.5rem;
  }
</style>