<template>
  <div class="db_hot_product db_products" v-infinite-scroll="getProducts" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <ul class="clearfix">
      <li v-for="product in hotProducts">
        <div class="pdt_item">
          <a :href="product.url+'/'+product.id" class="pdt_img">
            <img :src="product.src" height="300" width="300">
            <i class="fa fa-heart-o" v-on:click="onHeart($event)"></i>
          </a>
          <div class="pdt_detail">
            <h3 class="pdt_title">
              <a :href="product.url">{{product.title}}</a>
            </h3>
            <p class="pdt_price">
              <span class="pdt_new_price">{{product.newPrice}}</span>
              <del class="pdt_old_price">{{product.oldPrice}}</del>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!-- 加载更多，没有数据组件 -->
    <Loading v-show="isShowLoadingTips"></Loading>
    <None v-show="isShowLoadedTips"></None>
  </div>
</template>
<script type="text/javascript">
  import None from '../../components/none.vue'
  import Loading from '../../components/loading.vue'

  export default {
    data:function(){
      return{
       flag: true,
       hotProducts:[],
       busy: false,
       num: 6,
       isShowLoadingTips: false,
       isShowLoadedTips: false
     }
   },
   methods:{
    onHeart: function(e){
      if(this.flag){
        e.target.className="fa fa-heart";
        this.flag = false;
      }else{
        e.target.className="fa fa-heart-o";
        this.flag = true;
      }
      e.preventDefault();
    },
    getProducts(){
      var that = this;
      this.busy = true;
      this.isShowLoadingTips=true;
        // 用setTimeout的目的就是防止努力加载中看不到
        setTimeout(function(){
          that.$http.get('/static/json/products.json').then((response)=>{
            that.isShowLoadingTips=false;
            var result = response.data.list.slice(that.num-6,that.num);
            if(result.length !== 0){
              that.hotProducts = that.hotProducts.concat(result);
              that.busy = false;
              that.num+=6;
            }else{
              that.isShowLoadedTips = true;
            }
          })
        },1000)
      }
    },
    components: {
      None,
      Loading
    },
  }
</script>
<style scoped>
  .db_products{
    padding: 0.2rem;
  }
  .db_products ul li{
    width: 50%;
    float: left;
    padding: 0 0.2rem;
    margin: 0.2rem 0;
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
    position: relative;
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
  .db_products .pdt_img .fa{
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    color: #e17c72;
    font-size: 0.7rem;
  }
</style>