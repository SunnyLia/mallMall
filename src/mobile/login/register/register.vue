<template>
  <div class="db_login">
    <div class="db_login_top">欢迎加入豆瓣</div>
    <div class="db_login_form">
      <form @submit.prevent="submit">
        <p class="form_item"><input type="text" name="alias" placeholder="邮箱/手机号" class="alias"></p>
        <p class="form_item"><input :type="[showEye?'text':'password']" name="password" maxlength="14" placeholder="密码(至少6位)" class="password"><span @click="show()" :class="[showEye?'eye_open':'eye_close']"></span></p>
        <p class="form_item"><input type="text" name="name" placeholder="昵称" class="name"></p>
        <p class="form_btn"><button type="submit">下一步</button></p>
      </form>
    </div>
    <div class="login_other">点击「下一步」代表你已阅读并同意<a href="https://www.douban.com/about/agreement">用户使用协议</a></div>
    <div class="regist_download">
      <a href="#">下载豆瓣APP</a>
    </div>

    <div class="masks" v-show="showMask">请求错误</div>

  </div>
</template>
<script type="text/javascript">
  import {mapState,mapMutations} from 'vuex'
  export default {
    data(){
      return {
        showEye:false,
        showMask:false
      }
    },

    methods: {
      ...mapMutations([
        "USERINFO"
        ]),
      show(){
        this.showEye=!this.showEye;
      },
      submit:function(event){
        var value = $('.alias').val();
        var telTest = /^1(3|4|5|7|8)\d{9}$/;
        var emlTest = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if ($('.alias').val() == "") {
          this.setTimeShow('请输入手机号或邮箱');
        }else if ($('.pasword').val() == "") {
          this.setTimeShow('请输入密码');
        }else if ($('.name').val() == "") {
          this.setTimeShow('请输入昵称');
        }else if (!telTest.test(value) && !emlTest.test(value)) {
          this.setTimeShow('手机号或邮箱格式错误');
        }else{
          /*//因为豆瓣登录注册接口有权限问题，所有当走到这一步的时候，假设已经注册成功，并将用户信息存入localStorage里面
          this.$store.dispatch('register',useInfo);*/
          var userInfo = {
            alias:$('.alias').val(),
            password:$('.password').val(),
            name:$('.name').val()
          }
          localStorage.setItem("userInfo",JSON.stringify(userInfo));//将JSON转为字符串存到localStorage里
          this.$router.push({path:'/login'})
        }
      },
      setTimeShow:function(value){//显示两秒后消失
        $('.masks').text(value)//修改text
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
  .db_login .masks{
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
  .eye_open{
    background-image: url(../../../assets/imgs/eye_open.png);
  }
  .eye_close{
    background-image: url(../../../assets/imgs/eye_close.png);
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

  .db_login {
    font-size: 0.6rem;
    background-color: #fff;
  }
  .db_login .db_login_top{
    text-align: center;
    font-size: 1.5rem;
    color: #42bd56;
    margin: 1rem 0;
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