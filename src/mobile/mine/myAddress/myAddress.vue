<template>
  <div class="myAddress">
    <mine-header title="收货地址管理"></mine-header>
    <div class="address">
      <a href="javascript:;" @click="show">
        <span>+</span>
        <p>新建地址</p>
      </a>
    </div>
    <transition name="move">
      <address-mask v-show="isShow"
      @closeMask="closeMask"></address-mask>
    </transition>
  </div>
</template>
<script>
  import MineHeader from '@/mobile/mine/mineHeader/mineHeader.vue'
  import AddressMask from '@/mobile/mine/myAddress/addressMask/addressMask.vue'

  export default {
    data() {
      return {
        isShow:false
      }
    },
    mounted() {  
    },    
    methods: {
      show(){
        this.isShow = true;
      },
      closeMask(){
        this.isShow = false;
      }
    },
    components: {
      MineHeader,
      AddressMask
    }
  }
</script>
<style scoped>
  .move-leave-active,.move-enter-active{
    transition: 0.5s all ease;
  }
  .move-leave-active{
    transform:translateY(100%);
  }
  .move-enter-active{
    transform:translateY(0);
  }
  .move-enter{
    transform:translateY(100%);
  }
   .move-leave{
    transform:translateY(0);
  }

.myAddress .address{
  padding: 0.5rem;
}
.myAddress .address a{
  display: inline-block;
  width: 100%;
  height: 4rem;
  border: 1px solid #e4e4e4;
  text-align: center;
  padding: 0.5rem 0;
}
a,a:hover,a:active,a:visited,a:link,a:focus{
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
.myAddress .address a span{
  font-size: 1.5rem;
  color: #e4e4e4;
}
.myAddress .address a p{
  font-size: 0.5rem;
  color: red;
}
</style>