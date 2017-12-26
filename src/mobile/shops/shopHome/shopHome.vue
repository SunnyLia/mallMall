<template>
  <div class="shopHome">
    <div class="shopCont" v-for="(items,index) in shopInfo.rooms">
      <div class="shopName" v-if="index!=0">{{items.name}}</div>
      <div v-for="(item,i) in items.widgets">
        <!-- 轮播图 -->
        <swiper :shopsData="item.photo_data" v-if="item.photo_data"></swiper>
        <!-- 系列列表 -->
        <div class="catena" v-else>
          <p class="c_words">
            <span>{{item.title}}</span>
            <a href="#/shopAll">更多</a>
          </p>
          <ul class="clearfix">
            <li v-for="product in item.products" :class="{'double':item.products.length%2==1}">
              <div class="pdt_item">
                <router-link :to="{path:'/detail'}" class="pdt_img">
                <img v-lazy="product.default_sku.master_photos.large_url">
                <i class="fa fa-heart-o" v-on:click="onHeart($event)"></i>
              </router-link>
              <div class="pdt_detail">
                <h3 class="pdt_title">
                  <a href="javascript:;">{{product.title}}</a>
                </h3>
                <span class="pdt_new_price" v-for="(price,p) in product.default_sku.price_couple" v-if="p==0">{{price}}</span>
                <del class="pdt_old_price" v-for="(price,p) in product.default_sku.price_couple" v-if="p==1">{{price}}</del>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import Swiper from '@/mobile/home/swiper/swiper.vue'
  export default {
    data(){
      return{
        flag: true
      }
    },
    components: {
      Swiper
    },
    computed: {
      ...mapState(['shopInfo'])
    },
    methods:{
      onHeart(e){
        if(this.flag){
          e.target.className="fa fa-heart";
          this.flag = false;
        }else{
          e.target.className="fa fa-heart-o";
          this.flag = true;
        }
        e.preventDefault();
      }
    },
    mounted() {
      this.$store.dispatch('getShopInfo');
    }
  }
</script>
<style scoped>
  .shopHome{
    background-color: #f4f4f4;
  }
  .shopHome .shopCont{
    padding: 0.4rem;
  }
  .shopHome .shopCont .shopName{
    font-size: 0.6rem;
    text-align: center;
    margin-top: 0.5rem;
  }
  .shopHome ul li{
    width: 50%;
    float: left;
    padding: 0 0.2rem;
    margin-bottom: 0.4rem;
    box-sizing: border-box;
  }
  .shopHome ul li.double:last-child{
    width: 100%;
  }
  .shopHome ul li.double:last-child .pdt_item .pdt_img{
    height: 12rem;
    text-align: center;
  }
  .shopHome .pdt_item{
    background-color: #fff;
    box-shadow: 0 0 0.4rem #ccc;
  }
  .shopHome .pdt_img{
    display: block;
    width: 100%;
    height: 7.5rem;
    position: relative;
  }
  .shopHome .pdt_img img{
    width: 100%;
    height: 100%;
  }
  .shopHome .pdt_detail{
    padding:0.2rem;
    box-sizing: border-box;
    font-size: 0.5rem;
    height: 2rem;
  }
  .shopHome .pdt_title a{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #ccc;
    font-size: 0.55rem;
    line-height: 0.9rem;
  }
  .shopHome .pdt_new_price{
    color: #e17c72;
    font-weight: 600;
    font-size: 0.55rem;
  }
  .shopHome .pdt_old_price{
    color: #ccc;
    font-size: 0.55rem;
  }
  .shopHome .pdt_img .fa{
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    color: #e17c72;
    font-size: 0.7rem;
  }
  .shopHome .catena {
    margin-top: 0.5rem;
  }
  .shopHome .catena .c_words{
    font-size: 0.58rem;
    padding: 0 0.2rem;
    line-height: 1.8rem;
    color: #5c5c5c;
  }
  .shopHome .catena .c_words a{
    font-size: inherit;
    float: right;
    color: #9a9a9a;
  }
</style>