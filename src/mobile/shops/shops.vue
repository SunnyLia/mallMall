<template>
  <div class="shops">
    <shop-header></shop-header>
    <div class="shopCont" v-for="(items,index) in shopInfo.rooms">
      <div v-if="index==0" v-for="(item,i) in items.widgets">
        <swiper :shopsData="item.photo_data" v-if="i==0"></swiper>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import ShopHeader from './shopHeader/shopHeader.vue'
  import Swiper from '@/mobile/home/swiper/swiper.vue'
  export default {
    components: {
      ShopHeader,
      Swiper
    },
    computed: {
      ...mapState(['shopInfo'])
    },
    mounted() {
      this.$store.dispatch('getShopInfo');
    },
  }
</script>
<style scoped>
  .shops{
    background-color: #f4f4f4;
  }
  .shops .shopCont{
    padding: 0.5rem;
  }
</style>