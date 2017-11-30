<template>
  <div class="db_swiper">
    <swiper :options="swiperOption" ref="myS">
      <swiper-slide v-for="slide in sliders">
      <a :href="slide.url" target="_blank"><img :src="slide.src"></a>
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</template>
<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    name: 'dbSwiper',
    data() {
      return {
        swiperOption: {
          initialSlide:1,
          autoplay: 300000,
          loop: false,
          setWrapperSize :true,
          pagination: '.swiper-pagination',
          paginationClickable:true,
          observeParents:true
      },
      sliders:[
      {url:'https://shiji.douban.com/campaign/calendar2018/',
      src:"https://img3.doubanio.com/img/files/file-1508395738-0.jpg"},
      {url:'https://shiji.douban.com/campaign/canvasbag/',
      src:"https://img3.doubanio.com/img/files/file-1504231219-0.jpg"},
      {url:'https://shiji.douban.com/campaign/collection/',
      src:"https://img3.doubanio.com/img/files/file-1504231276-0.jpg"},
      {url:'https://shiji.douban.com/campaign/notebook/',
      src:'https://img3.doubanio.com/img/files/file-1510303015-0.jpg'}
      ]
  }
},

mounted() {
},
methods: {
},
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
.db_swiper .swiper-slide .swiper-pagination .swiper-pagination-bullet-active{
    background: #0aa082!important;
}
</style>

