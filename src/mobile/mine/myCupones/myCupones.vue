<template>
  <div class="cupones">
    <mine-header title="优惠券"></mine-header>
    <cupone-nav></cupone-nav>
    <!-- <order-none :words="words"></order-none> -->
    <router-view></router-view>
  </div>
</template>
<script>
  import MineHeader from '@/mobile/mine/mineHeader/mineHeader.vue'
  import CuponeNav from './cuponeNav/cuponeNav.vue'
  import OrderNone from '@/mobile/order/orderNone/orderNone.vue'
  export default {
    data() {
      return {
        words:'哇哦，还没有领取的优惠券~'       
      }
    },
    mounted() {  
    },    
    methods: {
    },
    components: {
      MineHeader,
      CuponeNav,
      OrderNone
    }
  }
</script>
<style scoped>

</style>