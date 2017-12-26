<template>
  <div class="shop">
    <shop-header></shop-header>
    <shop-nav></shop-nav>
    <router-view></router-view>
  </div>
</div>
</div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import ShopHeader from './shopHeader/shopHeader.vue'
  import ShopNav from './shopNav/shopNav.vue'
  export default {
    components: {
      ShopHeader,
      ShopNav
    }
  }
</script>
<style scoped>

</style>