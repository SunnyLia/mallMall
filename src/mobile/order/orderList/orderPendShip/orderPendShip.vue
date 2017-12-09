<template>
  <div class="order">
    <order-none :words="words"></order-none>
  </div>
</template>
<script>
  import OrderNone from '../../orderNone/orderNone.vue'
  export default {
    data() {
      return {
        words:'哇哦，这里什么都还没有哦~'       
      }
    },
   components: {
    OrderNone
  }
}
</script>
<style scoped>

</style>