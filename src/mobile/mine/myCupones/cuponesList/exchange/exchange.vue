<template>
  <div class="duihuan">
    <input type="text" name="code" placeholder="请输入优惠码">
    <a href="javascript:;">兑换</a>
  </div>
</template>

<style scoped>
  .duihuan{
    padding: 0.5rem 0.6rem;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
  }
  .duihuan input{
    width: 100%;
    height: 1.5rem;
    background-color: #f7f7f7;
    padding: 0 0.3rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .duihuan input::-webkit-input-placeholder{
    color: #999;
  }
  .duihuan a{
    width: 3rem;
    height: 1.5rem;
    color: #fff;
    background-color: #bdbdbd;
    font-size: 0.6rem;
    line-height: 1.5rem;
    text-align: center;
  }
</style>