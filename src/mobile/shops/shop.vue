<template>
  <div class="shop">
    <shop-header ref="shopHeader"></shop-header>
    <shop-nav :class="{'active':isFixed}"></shop-nav>
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
    data(){
      return {
        isFixed:false
      }
    },
    components: {
      ShopHeader,
      ShopNav
    },
    mounted(){
      var that = this;
      $(window).scroll(function(){
        var height =document.getElementsByClassName('shopHeader')[0];
        if (height) {
          if($(window).scrollTop() > height.clientHeight){
            that.isFixed = true;
          }else{
            that.isFixed = false;
          }
        };
      })
    }
  }
</script>
<style scoped>
  .active{
    position: fixed;
    top: 0;
  }
</style>