<template>
  <div class="db_login">
    <div class="db_login_top"><a href="javascript:void(0);" class="cancel" @click="goBack">取消</a>登录豆瓣</div>
    <div class="db_login_form">
      <form @submit.prevent="submit">
        <p class="form_item"><input type="text" name="username" placeholder="邮箱/手机号/用户名" class="username"></p>
        <p class="form_item"><input :type="[showEye?'text':'password']" name="password" maxlength="14" placeholder="密码" class="password"><span @click="showE()" :class="[showEye?'eye_open':'eye_close']"></span></p>
        <p class="form_btn"><button type="submit">登 录</button></p>
      </form>
    </div>
    <div class="login_other" @click="isShow=true">使用其它方式登录 & 找回密码</div>
    <div class="regist_download">
      <a href="#/register">注册豆瓣账号</a><a href="#">下载豆瓣APP</a>
    </div>
    <!-- 弹框 -->
    <div class="mask" @click="show" v-show="isShow">
      <div class="login_oth">
        <a href="#" class="close" @click="show">X</a>
        <ul>
          <li><a href="#" class="login_a">用微博登录</a></li>
          <li><a href="#" class="login_a">用微信登录</a></li>
          <li><a href="#" class="login_a">用手机验证码登录</a></li>
          <li><a href="#" class="login_a">找回密码</a></li>
        </ul>
      </div>
    </div>
    <div class="tasks" v-show="showMask">请求错误</div>
  </div>
</template>
<script type="text/javascript">
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return {
        showEye:false,
        isShow:false,
        showMask:false
      }
    },
    methods: {
      ...mapMutations([
        "IS_LOGIN"
        ]),
      showE(){
        this.showEye=!this.showEye;
      },
      goBack(){
        this.$router.go(-2);
      },
      show(){
        this.isShow = false;
      },
      submit(){
        var userInfo = localStorage.getItem("userInfo");
        userInfo = JSON.parse(userInfo); //将字符串对象转为JSON
        if ($('.username').val() == "") {
          this.setTimeShow('请输入手机号/邮箱/用户名');
        }else if ($('.pasword').val() == "") {
          this.setTimeShow('请输入密码');
        }else if($('.username').val() != userInfo.alias){
          this.setTimeShow('手机号/邮箱/用户名错误');
        }else if($('.password').val() != userInfo.password){
          this.setTimeShow('密码错误');
        }else{
          // this.IS_LOGIN(true);
          localStorage.setItem("IS_LOGIN",true);
          this.$router.push({path:'/home'})
        }
      },
      setTimeShow:function(value){//显示两秒后消失
        $('.tasks').text(value)//修改text
        var that = this;
        this.showMask=true;
        setTimeout(function(){
          that.showMask = false;
        }, 2000)
      }
    }
  }
</script>
<style scoped>
  .eye_open{
    background-image: url(../../assets/imgs/eye_open.png);
  }
  .eye_close{
    background-image: url(../../assets/imgs/eye_close.png);
  }
  .eye_close,.eye_open{
    width: 0.8rem;
    height: 0.8rem;
    background-repeat: no-repeat;
    background-size: 0.8rem 0.8rem;
    color: #42bd56;
    display: inline-block;
    float: right;
    margin: 0.5rem 0;
  }
  .db_login .tasks{
    display: inline-block;
    border-radius: 0.35rem;
    padding: 0.5rem 1rem;
    color: #f8f8fe;
    background-color: #535353;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
  }
  .db_login .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.3);
  }
  .db_login .mask .login_oth{
    width: 13rem;
    height: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    position: absolute;left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
  }
  .db_login .mask .login_oth .close{
    font-size: 0.8rem;
    padding:0.5rem 0.5rem 0.2rem;
    text-align: right;
    color: #b4b4b4;
    display: inherit;
  }
  .db_login .mask .login_oth ul li{
    text-align: center;
    height: 2rem;
    list-style: 2rem;
    border-bottom: 1px solid #fbfbfb;
  }
  .db_login .mask .login_oth ul li:last-child{
    border-bottom: 0;
  }
  .db_login .mask .login_oth ul li a{
    color: #42bd56;
    font-size: 0.8rem;
    display: block;
  }
  .db_login {
    font-size: 0.6rem;
  }
  .db_login .db_login_top{
    position: relative;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size:0.8rem;
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