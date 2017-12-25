<template>
  <div class="shopAll">
    <shop-header></shop-header>
    <div class="all">
      <ul>
        <li class="cur">全部</li>
        <li>手冲壶</li>
        <li>挂耳咖啡</li>
        <li>咖啡豆</li>
        <li>咖啡粉</li>
        <li>咖啡壶</li>
        <li>咖啡杯</li>
        <li>咖啡器具</li>
      </ul>
      <screen-nav></screen-nav>
      <List v-infinite-scroll="getData" infinite-scroll-disabled="busy" infinite-scroll-distance="10"></List>
    </div>
  </div>
</div>
</div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import ShopHeader from '../shopHeader/shopHeader.vue'
  import ScreenNav from '@/components/screenNav/screenNav.vue'
  import List from '@/mobile/search/searchList/searchList.vue'
  export default {
    components: {
      ShopHeader,
      ScreenNav,
      List
    },
    methods:{
      getData(){
        this.$store.dispatch('categoryList',277);
      }
    }
  }
</script>
<style scoped>
  .all{overflow: hidden;}
  .all ul{
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    width: auto;
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .all ul li{
    display: inline-block;
    height: 1.6rem;
    line-height: 1.6rem;
    padding: 0 0.5rem;
    color: #333;
    font-size: 0.6rem;
  }
  .all ul li.cur{
    color: #0aa082;
  }

</style>