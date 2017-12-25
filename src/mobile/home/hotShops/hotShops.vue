<template>
<div class="db_hot_shop">
  <div class="db_shop_item" v-for="shop in hotShops">
    <!-- 店铺名称和简介 -->
      <div class="shop_info">
        <h3 class="shop_top">
          <a class="shop_img"><img :src="shop.icon" ></a>
          <a class="shop_name">{{shop.name}}</a>
        </h3>
        <p class="shop_intrduction">{{shop.intrduction}}</p>
      </div>
    <div class="db_swiper">
      <swiper :options="swiperOption" ref="myS">
        <swiper-slide v-for="slide in shop.products">
            <a :href="slide.url">
          <div class="db_img">
            <img v-lazy="slide.src">
          </div>
          <div class="db_word">
          <p>{{slide.title}}</p>
          <h5><span>￥{{slide.newPrice}}</span><del>￥{{slide.oldPrice}}</del></h5>
          </div>
            </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="shop_entry"><a href="#/shopHome">进入店铺 >></a></div>
  </div>
</div>
</template>
<script type="text/javascript">
  import {mapState,mapActions} from 'vuex'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 2.5,
          spaceBetween: 10
        }
      }
    },
    computed: mapState(['hotShops']),
    mounted() {
    this.$store.dispatch('hotShop');
    },
    components: {
      swiper,
      swiperSlide
    }
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
  .db_hot_shop .shop_intrduction{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #9b9b9b;
  }
    .db_hot_shop .shop_entry{
    text-align: right;
    padding: 0 0.4rem;
    box-sizing: border-box;
    line-height: 1.5rem;
  }
  .db_hot_shop .shop_entry a{
    color: #4a4a4a;
    font-size:0.6rem;
  }
.db_swiper{
  padding: 0 0.4rem;
}
.swiper-container{
  width:100%;
  height: auto;
}
.swiper-slide{
  /*margin-right:0.4rem;*/
}
.swiper-slide a{
display:inline-block;
    width: 100%;
    height: 100%;
}
.swiper-slide a .db_img{
    width:100%;
  height:6rem;
    display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide a .db_img img{
  width:100%;
  height:auto;
}
.swiper-slide a .db_word{
  padding: 0.3rem 0.2rem 0.1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.5rem;
    height: 1.8rem;
}
.swiper-slide a .db_word p{
      white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.6rem;
}
.swiper-slide a .db_word h5 span{
      color: #e17c72;
    font-weight: 600;
}
.swiper-slide a .db_word h5 del{
      color: #ccc;
}
</style>

