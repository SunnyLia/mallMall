<template>
  <div class="myAddress">
    <mine-header title="收货地址管理"></mine-header>
    <div class="address">
      <a href="javascript:;">
        <span>+</span>
        <p>新建地址</p>
      </a>
    </div>
    <address-mask></address-mask>
  </div>
</template>
<script>
  import MineHeader from '@/mobile/mine/mineHeader/mineHeader.vue'
  import AddressMask from '@/mobile/mine/myAddress/addressMask/addressMask.vue'

  export default {
    data() {
      return {

      }
    },
    mounted() {  
    },    
    methods: {
    },
    components: {
      MineHeader,
      AddressMask
    }
  }
</script>
<style scoped>
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
  .myAddress .address a span{
    font-size: 1.5rem;
    color: #e4e4e4;
  }
  .myAddress .address a p{
    font-size: 0.5rem;
    color: red;
  }
</style>