<template>
    <div class="shopHeader">
      <div class="sh_img fl">
        <img src="../../../../static/imgs/default.png" alt="">
      </div>
      <div class="sh_title">
        <h4><span>三顿半</span><i class="fa fa-search fr"></i></h4>
        <p>探索正餐之外的飲食，捕捉自然的每一道風味捕捉自然的每一道風。</p>
      </div>
    </div>
</template>
<style scoped>
.shopHeader{
  width: 100%;
  height: 2.8rem;
  background-color: #0aa082;
  padding: 0.45rem 0.5rem;
}
.shopHeader .sh_img img{
  height: 1.9rem;
  width: 1.9rem;
  border-radius: 50%;
  margin-right: 0.4rem;
}
.shopHeader .sh_title{
  color: #fff;
  font-size: 0.58rem;
  line-height: 1rem;
}
.shopHeader .sh_title p{
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.shopHeader .sh_title h4 i{
  font-size: 0.7rem;
  padding: 0.1rem;
}
</style>