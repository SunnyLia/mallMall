<template>
  <div class="db_detail">
    <!-- 返回 -->
    <div class="db_detail_back" @click="goBack"><span class="fl fa fa-chevron-left"></span>商品详情</div>
    <swiper :swiperData="detailInfos.pics"></swiper>
    <!-- 名称,价格,其它 -->
    <div class="db_detail_info">
      <div class="price" v-for="(item,index) in detailInfos.sku_info" v-if="index == childData">
        <span class="now_price">￥{{item.promote_price}}</span>
        <del class="old_price">￥{{item.market_price}}</del>
      </div>
      <div class="freight">
        <div class="fre_lt">
          <span class="fre_price">运费：￥{{detailInfos.delivery_detail.start_fees}} </span>
          <span class="fre_tips"> 非包邮区域</span>
        </div>
        <div class="fre_rt">
          <span :class="{'fa fa-heart':detailInfos.liked,'fa fa-heart-o':!detailInfos.liked}" @click="onHeart();"></span>
          <span class="message"></span>
        </div>
      </div>
    </div>

    <Type @typeDate="typeDetail"></Type>

    <!-- 承诺 -->
    <div class="db_detail_promise">
      <span>豆瓣市集担保</span>
      <span>七天无理由退货</span>
      <span>正品保证</span>
      <span>独立品牌</span>
    </div>
    <Tab></Tab>
    <!-- 固定栏 -->
    <div class="db_fixed_bar">
      <div class="cart"><span class="fa fa-shopping-cart"></span></div>
      <div class="add">加购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapActions} from 'vuex'
  import Swiper from '@/mobile/home/swiper/swiper.vue'
  import Type from './type/type.vue'
  import Tab from './tab/tab.vue'

  export default {
    data() {
      return {
        childData:0
      }
    },
    computed: {
      ...mapState(['detailInfos'])
    },
    mounted() {
      this.$store.dispatch('detailInfo');
    },
    methods: {
      // ...mapActions(['detailInfo']),
      goBack(){
        this.$router.go(-1);
      },
      onHeart(){
        this.detailInfos.liked = !this.detailInfos.liked;
      },
      typeDetail(value){//type组件传过来的数据
        this.childData = value;
      }
    },
    components: {
      Type,
      Tab,
      Swiper
    }
  }
</script>
<style scoped>
  .db_detail{
    padding: 1.5rem 0 1.8rem;
  }
  .db_detail .db_detail_back{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    color: #999;
    font-size: 0.6rem;
    background-color: #fff;
  }
  .fa-chevron-left{
    position: absolute;
    top: 50%;left:0.6rem;
    transform:translateY(-50%);
  }
  .db_detail .db_detail_info{
    padding:0.5rem;
    font-size: 0.6rem;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
  }
  .db_detail .db_detail_info .title{
    font-size: 0.7rem;
  }
  .db_detail .db_detail_info .price{
    margin: 0.25rem 0;
  }
  .db_detail .db_detail_info .now_price{
    color: #e17c72;
    font-weight: 600;
  }
  .db_detail .db_detail_info .old_price{
    color: #ccc;
    margin-left: 0.2rem;
    font-size: 0.55rem;
  }
  .db_detail .db_detail_info .freight{
    height: 0.6rem;
    line-height: 0.7rem;
  }
  .db_detail .db_detail_info .fre_lt{
    max-width: 80%;
    float: left;
    font-size: 0.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .db_detail .db_detail_info .fre_rt{
    float: right;
  }
  .db_detail .db_detail_info .fre_tips{
    color: #e17c72;
    font-size: 0.55rem;
    margin-left: 0.2rem;
  }
  .db_detail .db_detail_info .fa{
    padding-right: 0.4rem;
    color: #e17c72;
    font-size: 0.7rem;
  }
  .db_detail .db_detail_info .message{
    width: 26px;
    height: 24px;
    display: inline-block;
    background-image: url(../../assets/imgs/message.png);
    padding-right: 0;
    padding-right: 0;
    background-size: cover;
    vertical-align: middle;
    margin-bottom: 5px;
  }

  .db_detail_promise {
    line-height: 3rem;
    text-align: center;
    font-size: 0;
  }
  .db_detail_promise span{
    color: #9b9b9b;
    font-size: 0.5rem;
    padding: 0 0.4rem;
  }
  .db_detail_promise span:first-of-type{
    border-right: 1px solid #ccc;
  }
  .db_detail_promise span:nth-of-type(3){
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  .db_fixed_bar{
    position: fixed;
    left: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: box;
    display: flex;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: #f8f8fe;
  }
  .db_fixed_bar > div{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    box-flex: 1;
    flex: 1;
    line-height:1.8rem;
    text-align: center;
    color: #fff;
    font-size: 0.6rem;
  }
  .db_fixed_bar .cart{
    color: #9d9d9d;
    font-size: 0.8rem;
  }
  .db_fixed_bar .add {
    background-color: #eba887;
  }
  .db_fixed_bar .buy{
    background-color: #e17c72;
  }
</style>