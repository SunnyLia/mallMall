<template>
  <div class="cart">
    <headers></headers>
    <navs></navs>
    <!-- <cart-enpty></cart-enpty> -->
    <cart-list></cart-list>
    
  </div>
</template>

<script type="text/javascript">

  import Headers from '@/components/header/Header.vue'
  import Navs from '@/components/nav/Nav.vue'
  // import CartEnpty from './cartEnpty/cartEnpty.vue'
  import CartList from './cartList/cartList.vue'

  export default {
    components: {
      Headers,
      Navs,
      // CartEnpty,
      CartList
    },
    mounted(){
      this.$store.dispatch('cartList');     
    }
  }
</script>
<style scoped>
  .cart{
    background-color: #f4f4f4;
  }
</style>