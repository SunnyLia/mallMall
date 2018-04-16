<template>
  <div class="tabs_detail">
    <div v-for="urls in detailTabs.info_photos">
      <img v-lazy="urls">
    </div>
    <div class="bottom_bar">
      <a href="#" class="explain">购物说明</a>
      <a href="#" class="help">帮助</a>
      <a href="#" class="concat">联系豆瓣</a>
    </div>
    <div class="bottom_link">逛逛<a href="#">豆瓣市集</a></div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from "vuex"
  export default{
    computed: {
      ...mapState(['detailTabs'])
    }
  }
</script>
<style scoped>
  .tabs_detail img{
    display: block;
    width: 100%;
    max-width: 100%;
  }
  .tabs_detail .bottom_bar{
    line-height: 1.5rem;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 0.5rem;
  }
  .tabs_detail .bottom_bar a{
    color: #9b9b9b;
    font-size: 0.5rem;
    line-height: 1.5rem;
  }
  .tabs_detail .bottom_bar .explain{
    padding-right: 0.4rem;
    border-right: 1px solid #9b9b9b;
  }
  .tabs_detail .bottom_bar .concat{
    float: right;
  }
  .tabs_detail .bottom_link{
    text-align: center;
    padding: 0.8rem 0;
    font-size: 0.6rem;
  }
  .tabs_detail .bottom_link a{
    color: #3ba94d;
    margin-left: 0.5rem;
  }
</style>