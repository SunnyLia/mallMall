<template>
  <div class="unUsed">
<order-none :words="words"></order-none>
 </div>
</template>
<script>
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
    components:{
      OrderNone
    }
  }
</script>
