  <template>
    <!-- 购物车空 -->
    <div class="cartEnpty">
      <div class="enpty">
        <img src="../../../assets/imgs/cart_enpty.png" alt="">
        <p>{{words}}</p>
        <a href="#/home">去逛逛吧</a>
      </div>
    </div>
  </template>
  <script>
    export default {
     props:['words'],
   }
 </script>
 <style scoped>
  .cartEnpty .enpty{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
  }
  .cartEnpty .enpty img{
    width: 7rem;
    height: auto;
  }
  .cartEnpty .enpty p{
    font-size: 0.6rem;
    margin: 1.2rem 0;
  }
  .cartEnpty .enpty a{
    display: inline-block;
    width: 4.5rem;
    height: 1.6rem;
    border: 1px solid #0aa082;
    color: #0aa082;
    text-align: center;
    line-height: 1.6rem;
    border-radius: 0.2rem;
    font-size: 0.6rem;
  }
</style>