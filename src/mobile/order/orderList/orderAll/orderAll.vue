<template>
  <div class="orderAll">
    <ul>
      <li>
        <div class="order clearfix">
          <div class="fl">订单号：<span>4916500269</span></div>
          <div class="fr">待付款</div>
        </div>
        <div class="infoms">
          <a href="#" class="clearfix">
            <div class="photo fl">
              <img src="../../../../assets/imgs/search_no.png" alt="">
            </div>
            <div class="depict">
              <h4>已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀</h4>
              <p>黑色单里 <span> 34</span></p>
            </div>
            <div class="price fr">
              <p>￥288.00 <span>× 1</span></p>
            </div>
          </a>
        </div>
        <div class="quality">
          <span>共1件商品</span>
          <span>运费：￥12.00</span>
          <span>总计：<i class="red">￥300.00</i></span>
        </div>
        <div class="button">
          <a href="#">取消订单</a>
          <a href="#" class="red">立即支付</a>
        </div>
      </li>
      <li>
        <div class="order clearfix">
          <div class="fl">订单号：<span>4916500269</span></div>
          <div class="fr">待收货</div>
        </div>
        <div class="infoms">
          <a href="#" class="clearfix">
            <div class="photo fl">
              <img src="../../../../assets/imgs/search_no.png" alt="">
            </div>
            <div class="depict">
              <h4>已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀</h4>
              <p>黑色单里 <span> 34</span></p>
            </div>
            <div class="price fr">
              <p>￥288.00 <span>× 1</span></p>
            </div>
          </a>
        </div>
        <div class="quality">
          <span>共1件商品</span>
          <span>运费：￥12.00</span>
          <span>总计：<i class="red">￥300.00</i></span>
        </div>
        <div class="button">
          <a href="#">查看物流</a>
          <a href="#" class="red">确认收货</a>
        </div>
      </li>
      <li>
        <div class="order clearfix">
          <div class="fl">订单号：<span>4916500269</span></div>
          <div class="fr">待发货</div>
        </div>
        <div class="infoms">
          <a href="#" class="clearfix">
            <div class="photo fl">
              <img src="../../../../assets/imgs/search_no.png" alt="">
            </div>
            <div class="depict">
              <h4>已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀</h4>
              <p>黑色单里 <span> 34</span></p>
            </div>
            <div class="price fr">
              <p>￥288.00 <span>× 1</span></p>
            </div>
          </a>
        </div>
        <div class="quality">
          <span>共1件商品</span>
          <span>运费：￥12.00</span>
          <span>总计：<i class="red">￥300.00</i></span>
        </div>
        <div class="button">
          <a href="#">取消订单</a>
          <a href="#" class="red">提醒发货</a>
        </div>
      </li>
      <li>
        <div class="order clearfix">
          <div class="fl">订单号：<span>4916500269</span></div>
          <div class="fr">交易关闭</div>
        </div>
        <div class="infoms">
          <a href="#" class="clearfix">
            <div class="photo fl">
              <img src="../../../../assets/imgs/search_no.png" alt="">
            </div>
            <div class="depict">
              <h4>已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀  踏碎成年代已枯倦的情怀</h4>
              <p>黑色单里 <span> 34</span></p>
            </div>
            <div class="price fr">
              <p>￥288.00 <span>× 1</span></p>
            </div>
          </a>
        </div>
        <div class="quality">
          <span>共1件商品</span>
          <span>运费：￥12.00</span>
          <span>总计：<i class="red">￥300.00</i></span>
        </div>
        <div class="button">
          <a href="#">删除订单</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .orderAll ul li .button a{
    width: 3.5rem;
    height: 1.2rem;
    display: inline-block;
    border-radius: 0.2rem;
    border: 1px solid #e4e4e4;
    line-height: 1.2rem;
    text-align: center;
    margin-left: 0.3rem;
  }
  .orderAll ul li .button .red{
    border-color: #f05f50;
    color:  #f05f50;
  }
  .orderAll ul li .button{
    text-align: right;
    border-bottom: 0;
  }
  .orderAll ul li .quality{
    text-align: right;
    font-size: 0.5rem;
  }
  .orderAll ul li .quality span{
    margin-left: 0.4rem;
  }
  .orderAll ul li .quality span .red{
    color: #f05f50;
    font-size: 0.6rem;
  }
  .orderAll ul li{
    border-bottom: 1px solid #e4e4e4;
    padding: 0 0.6rem;
    margin-top: 0.4rem;
    background-color: #fff;
  }
  .orderAll ul li .order,.quality,.button{
    height: 1.8rem;
    line-height: 1.8rem;
    border-bottom: 1px solid #eeeeee;
    font-size: 0.6rem;
    color: #5c5c5c;
  }
  .orderAll ul li .order .fr{
    color: #0aa082;
  }
  .orderAll ul li .infoms{
    padding: 0.4rem 0;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }
  .orderAll ul li .infoms a{
    color: #9a9a9a;
    font-size: 0.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  .orderAll ul li .infoms .depict{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 100%;
    overflow: hidden;
    padding: 0.2rem 0;
    margin-left: 0.4rem;
  }

  .orderAll ul li .infoms .photo img{
    width: 2.8rem;
    height: auto;
  }
  .orderAll ul li .infoms .depict h4{
    color: #000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .orderAll ul li .infoms .depict p{
    font-size: 0.5rem;
    margin-top: 1rem;
  }
  .orderAll ul li .infoms .price p{
    margin-top: 1.95rem;
  }
  
</style>