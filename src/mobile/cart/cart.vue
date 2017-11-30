<template>
  <div class="cart">
    <headers></headers>
    <navs></navs>
    <cart-enpty></cart-enpty>
    
  </div>
</template>

<script type="text/javascript">

  import Headers from '@/components/header/Header.vue'
  import Navs from '@/components/nav/Nav.vue'
  import CartEnpty from './cartEnpty/cartEnpty.vue'

  export default {
    components: {
      Headers,
      Navs,
      CartEnpty
    }
  }
</script>
<style scoped>

</style>