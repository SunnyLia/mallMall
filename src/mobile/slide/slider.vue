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
  import axios from 'axios'
  require('swiper/dist/css/swiper.css')
  export default {
    name: 'dbSwiper',
    data() {
      return {
        swiperOption: {
          initialSlide:1,
          autoplay: 3000,
          loop: true,
          setWrapperSize :true,
          pagination: '.swiper-pagination',
          paginationClickable:true,
          observeParents:true
        },
        sliders:[]
      }
    },

    mounted() {
      /* 获取详情的轮播图 */
      this.getDetailSlider();
    },
    methods: {
      //获取图片数据
      getDetailSlider(){
        axios.get('../../../static/json/products.json').then((response)=>{
          this.sliders = response.data.list.slice(0,5);//展示前6条信息
        }).catch(function(error){
          console.log('请求slider数据:'+error);
        });
      }
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
    height: 10rem;
  }
  .db_swiper .swiper-slide a,.db_swiper .swiper-slide img{
    display: inline-block;
    width: 100%;
    height: 10rem;
  }
</style>

