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
        words:'哇哦，这里什么都还没有~'       
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
