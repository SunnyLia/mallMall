<template>
  <div class="unUsed">
    <exchange></exchange>
    <ul>
      <li>
        <a href="javascript:;">
          <div class="abc">
            <div class="abc_e">
              <span><em>已使用</em></span>
            </div>
            <div class="abc_a">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div class="abc_b">
              <p class="b_top"><i>￥</i><em>50</em></p>
              <p class="b_bot">满600元可用</p>
            </div>
            <div class="abc_c">
              <p class="c_top">满600减50</p>
              <p class="c_cen">长闲饭罢必煎茶</p>
              <p class="c_bot">
                <span>有效期：2017.10.16 ~ 2017.12.31</span>
              </p>
            </div>
            <div class="abc_d">
             <i></i>
             <i></i>
             <i></i>
             <i></i>
             <i></i>
             <i></i>
             <i></i>
             <i></i>
           </div>
         </div>
       </a>
     </li>
   </ul>
 </div>
</template>
<script>
  import Exchange from './exchange/exchange.vue'
  export default {
    data() {
      return {
        words:'哇哦，还没有领取的优惠券~'       
      }
    },
    mounted() {  
    },    
    methods: {
    },
    components: {
      Exchange
    }
  }
</script>
<style scoped>
  .abc_e{
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
    color: #fff;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
  }
  .abc_e span{
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    display: inline-block;
    width: 3rem;
    background-color: #9a9a9a;
    z-index: 1;
    position: relative;
    top: 0;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.16rem;
    right: -0.5rem;
  }
  .c_bot span{
    margin-left: 0.37rem;
  }
  .c_bot{
    font-size: 0.25rem;
    padding-top: 0.25rem;
    margin-left: 0.35rem;
    border-top-width: 0.03rem;
    bottom: 0.35rem;
    line-height: 1.12;
    border-top-style: dashed;
    border-top-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    box-sizing: border-box;
    font-weight: 300;
  }
  .c_top{
    font-size: 0.6rem;
    margin-left: 0.7rem;
    margin-bottom: 0.1rem;
  }
  .c_cen{
    font-size: 0.35rem;
    margin-left: 0.7rem;
  }
  .unUsed li{

    padding: 0.2rem 0.6rem;
  }
  .unUsed li a{
    display: block;
    position: relative;
    z-index: 1;
  }
  .abc{
    background-color:#bdbdbd;
    color: #fff;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    z-index: 1;
  }
  .abc_a{
    left: -0.18rem;
    padding-top: 0.08rem;
    position: absolute;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    bottom: 0;
    z-index: 10;
  }
  .abc_b{
    padding-bottom: 0.6rem;
    padding-top: 0.5rem;
    border-right-width: 0.03rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    line-height: 1;
    border-right-style: dashed;
    border-right-color: #fff;
    position: relative;
    z-index: 1;
  }
  .abc_c{
    padding-top: 0.5rem;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
    position: relative;
    z-index: 1;
    text-align: left;
  }
  .abc_d{
    right: -0.18rem;
    padding-top: 0.08rem;
    position: absolute;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    bottom: 0;
    z-index: 10;
  }
  .abc_a i,.abc_d i{
    width: 0.35rem;
    height: 0.35rem;
    margin-bottom: 0.08rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-radius: 50%;
    background-color: #fff;
  }

  .abc_b:before{
    width: 0.35rem;
    height: 0.35rem;
    right: -0.17rem;
    top: -0.17rem;
    content: "";
    display: block;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
  }
  .abc_b:after{
    bottom: -0.17rem;
    width: 0.35rem;
    height: 0.35rem;
    right: -0.17rem;
    content: "";
    display: block;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
  }
  .b_top{
    margin-bottom: 0.2rem;
  }
  .b_top i{font-size: 0.5rem;}
  .b_top em{font-size: 1.8rem;}
  .b_bot{
    font-size: 0.35rem;
  }
</style>