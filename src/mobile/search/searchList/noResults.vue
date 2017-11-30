<template>
  <div class="db_noresult">
    <div class="noRes">
      <img src="../../../assets/imgs/search_no.png" alt="">
      <h4>哇哦，没有您要的结果!</h4>
      <p>试试另外的名称或类别吧~</p>
    </div>
  </div>
</template>
<style scoped>
  .noRes{
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
  }
  .noRes img{
    width: 5rem;
    height: auto;
  }
  .noRes h4{
    font-size: 0.7rem;
    color: #5c5c5c;
    line-height: 2rem;
  }
  .noRes p{
    font-size: 0.4rem;
    color: #9a9a9a;
  }
</style>