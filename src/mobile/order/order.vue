<template>
  <div class="order">
    <mine-header title="订单管理"></mine-header>
    <order-nav></order-nav>
    <!-- <order-none :words="words"></order-none> -->
    <router-view></router-view>
  </div>
</template>
<script>
  import MineHeader from '@/mobile/mine/mineHeader/mineHeader.vue'
  import OrderNav from './orderNav/orderNav.vue'
  import OrderNone from './orderNone/orderNone.vue'
  export default {
    data() {
      return {
        words:'哇哦，这里什么都还没有哦~'       
      }
    },
    mounted() {  
     this.$store.dispatch('orderList'); 
   },    
   methods: {
   },
   components: {
    OrderNav,
    MineHeader,
    OrderNone
  }
}
</script>
<style scoped>
  .order{
    background-color: #f5f5f5;
  }
</style>