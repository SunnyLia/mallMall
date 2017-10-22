<template>
  <div class="db_swiper">
    <swiper :options="swiperOption" ref="myS">
      <swiper-slide v-for="slide in sliders">
      <a :href="slide.url" target="_blank"><img :src="slide.img"></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          initialSlide:1,
          autoplay: 3000,
          loop: true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true
        },
        sliders:[
        {
          'img':'../../../static/test_hot_product.jpg',
          "url": "www.baidu.com"
        },{
          'img':'../../../static/test_hot_product.jpg',
          "url": "www.baidu.com"
        },{
          'img':'../../../static/test_hot_product.jpg',
          "url": "www.baidu.com"
        }
        ]
      }
    },
    // computed: {
    //   swiper(){
    //     return this.$refs.myS.swiper;
    //   }
    // },
    mounted() {},
    methods: {},
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style scoped>
  .db_swiper,.swiper-container,.swiper-slide{
    width: 100%;
    height: 8rem;
  }
  .db_swiper .swiper-slide a,.db_swiper .swiper-slide img{
    display: inline-block;
    width: 100%;
    height: 8rem;
  }
</style>

