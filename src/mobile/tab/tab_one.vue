<template>
  <div class="tabs_detail">
    <img src="http://p1.bpimg.com/587986/649b4ff9a029dbb3.jpg">
    <img src="http://p1.bpimg.com/587986/c5d8d2c850c5cc92.jpg">
    <img src="http://p1.bpimg.com/587986/12e168a53d8b1390.jpg">
    <img src="http://p1.bpimg.com/587986/4aa678607eb830c0.jpg">
    <img src="http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg">
    <div class="bottom_bar">
      <a href="#" class="explain">购物说明</a>
      <a href="#" class="help">帮助</a>
      <a href="#" class="concat">联系豆瓣</a>
    </div>
    <div class="bottom_link">逛逛<a href="#">豆瓣市集</a></div>
  </div>
</template>

<style scoped>
  .tabs_detail img{
    display: block;
    max-width: 100%;
  }
  .tabs_detail .bottom_bar{
    padding: 5px 15px;
    border-bottom: 1px solid #f0f0f0;
  }
  .tabs_detail .bottom_bar a{
    color: #9b9b9b;
    font-size: 14px;
  }
  .tabs_detail .bottom_bar .explain{
    padding-right: 5px;
    border-right: 1px solid #9b9b9b;
  }
  .tabs_detail .bottom_bar .concat{
    float: right;
  }
  .tabs_detail .bottom_link{
    text-align: center;
    padding: 25px 0;
    font-size: 14px;
  }
  .tabs_detail .bottom_link a{
    color: #3ba94d;
    margin-left: 2px;
  }
</style>