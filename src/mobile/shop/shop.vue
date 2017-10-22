<template>
  <div class="db_hot_shop" v-infinite-scroll="getHotShops" infinite-scroll-disabled="busy" infinite-scroll-distance="{num}">
    <!-- 一个店铺 -->
    <div class="db_shop_item" v-for="shop in hotShops">
      <!-- 店铺名称和简介 -->
      <div class="shop_info">
        <h3 class="shop_top">
          <a href="" class="shop_img"><img :src="shop.icon" ></a>
          <a href="#" class="shop_name">{{shop.name}}</a>
        </h3>
        <p class="shop_intrduction">{{shop.intrduction}}</p>
      </div>
      <!-- 店铺热门商品 -->
      <div class="shop_product db_products">
        <ul class="clearfix">
          <li v-for="pd in shop.products">
            <div class="pdt_item">
              <a :href="pd.url+'/'+pd.id" class="pdt_img">
                <img v-lazy="pd.src" height="300" width="300">
              </a>
              <div class="pdt_detail">
                <h3 class="pdt_title">
                  <a :href="pd.url+'/'+pd.id">{{pd.title}}</a>
                </h3>
                <p class="pdt_price">
                  <span class="pdt_new_price">{{pd.newPrice}}</span>
                  <del class="pdt_old_price">{{pd.oldPrice}}</del>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <p class="shop_entry"><a :href="shop.url">进入店铺 >></a></p>
    </div>
    <!-- 加载更多，没有数据组件 -->
    <Loading v-show="isShowLoadingTips"></Loading>
  </div>
</template>
<script type="text/javascript">
  import Loading from '../../components/loading.vue'
  // import axios from 'axios'
  export default {
    data:function(){
      return{
        hotShops:[],
        busy:false,
        num:3,
        isShowLoadingTips:false,
        isShowLoadedTips:false
      }
    },
    methods: {
      getHotShops(){
        var that = this;
        this.busy = true;
        this.isShowLoadingTips=true;
        // 用setTimeout的目的就是防止努力加载中看不到
        setTimeout(function(){
          that.$http.get('/static/json/hotShops.json').then((response)=>{
            that.isShowLoadingTips=false;
            var result = response.data.list.slice(that.num-3,that.num);
            if(result.length !== 0){
              that.hotShops = that.hotShops.concat(result);
              that.busy = false;
              that.num+=3;
            }
          })
        },1000)
      }
    },
    components: {
      Loading
    },
  }
</script>
<style scoped>
  .db_hot_shop .db_shop_item {
    margin-bottom: 0.5rem;
    -webkit-box-shadow:0 0 1px rgba(0, 0, 0, .1);  
    -moz-box-shadow:0 0 1px rgba(0, 0, 0, .1);  
    box-shadow:0 0 1px rgba(0, 0, 0, .1);  
    background-color: #fff;
    font-size: 0.5rem
  }
  .db_hot_shop .shop_info{
    padding: 0.4rem;
  }
  .db_hot_shop .shop_top{
    height: 1.2rem;
    line-height: 1.2rem;
  }
  .db_hot_shop .shop_img{
    /*display: block;*/
    width: 1rem;
    height: 1rem;
    line-height: 1.2rem;
    float: left;
    margin-right: 0.4rem;
    vertical-align: middle;
  }
  .db_hot_shop .shop_img img{
    max-width: 100%;
    max-height: 100%;
    vertical-align: baseline;
  }
  .db_hot_shop .shop_name{
    display: block;
    line-height: 1.2rem;
    color: #4a4a4a;
    font-size: 0.6rem;
  } 
  .db_products{
    padding: 0.2rem;
  }
  .db_products ul li{
    width: 50%;
    float: left;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
  .db_products .pdt_item{
    background-color: #fff;
    box-shadow: 0 0 0.4rem #ccc;
  }
  .db_products .pdt_img{
    display: block;
    width: 100%;
    height: 6rem;
  }
  .db_products .pdt_img img{
    max-width: 100%;
    max-height: 100%;
  }
  .db_products .pdt_detail{
    padding:0.2rem;
    box-sizing: border-box;
    font-size: 0.5rem;
  }
  .db_products .pdt_title a{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #ccc;
    font-size: 0.6rem;
  }
  .db_products .pdt_new_price{
    color: #e17c72;
    font-weight: 600;
  }
  .db_products .pdt_old_price{
    color: #ccc;
  }
  .db_hot_shop .shop_entry{
    text-align: right;
    padding: 0 0.4rem;
    box-sizing: border-box;
    line-height: 1.2rem;
  }
  .db_hot_shop .shop_intrduction{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #9b9b9b;
  }
  .db_hot_shop .shop_entry a{
    color: #4a4a4a;
  }
  .loading{
    text-align: center;
    color: #999;
    font-size: 0.3rem;
  }
  .none{
    text-align: center;
    color: #999;
    font-size: 0.3rem;
  }
</style>