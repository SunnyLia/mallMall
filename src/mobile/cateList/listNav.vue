<template>
  <div class="list_nav">
    <ul>
      <li class="cur"><a href="#">全部</a></li>
      <li><a href="#">男上装</a></li>
      <li><a href="#">男下装</a></li>
      <li><a href="#">裙装</a></li>
      <li><a href="#">女套装</a></li>
      <li><a href="#">女上装</a></li>
      <li><a href="#">女下装</a></li>
      <li><a href="#">裙装</a></li>
      <li><a href="#">女套装</a></li>
      <li><a href="#">女上装</a></li>
      <li><a href="#">女下装</a></li>
    </ul>
  </div>
</template>
<style scoped>
  .list_nav{
    height: 1.6rem;
    overflow: hidden;
    background-color: #68cb78;
  }
  .list_nav ul{
    width: auto;
    height: 1.6rem;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list_nav ul li{
    display: inline-block;
    padding: 0 0.6rem;
    line-height: 1.6rem;
  }
  .list_nav ul li.cur a{
    color: #fff;
  }
  .list_nav ul li a{
    color: #333;
    font-size: 0.6rem;
  }
</style>