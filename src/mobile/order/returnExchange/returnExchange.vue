<template>
  <div class="retrun">
    <mine-header title="退换货"></mine-header>
    <order-none :words="words"></order-none>
  </div>
</template>
<script>
  import MineHeader from '@/mobile/mine/mineHeader/mineHeader.vue'
  import OrderNone from '../orderNone/orderNone.vue'
  export default {
    data() {
      return {
        words:'哇哦，还没有退货/退款的商品哦~'      
      }
    },
    components: {
      MineHeader,
      OrderNone
    }
  }
</script>
<style scoped>
</style>