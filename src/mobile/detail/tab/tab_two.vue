<template>
  <!-- 讨论列表 -->
  <div class="db_comments">
    <!-- 一条讨论 -->
    <div class="comment_item">
      <div class="comment_infos">
        <img src="../../../../static/test_hot_product.jpg" class="u_photo">
        <span class="u_name">张三</span>
        <span class="u_time">2016-07-07 16:23:44</span>
      </div>
      <div class="comment_text">180偏瘦的人买XL的还是XXL的？180偏瘦的人买XL的还是XXL的？180偏瘦的人买XL的还是XXL的？180偏瘦的人买XL的还是XXL的？</div>
    </div>

    <!-- 一条讨论 -->
    <div class="comment_item">
      <div class="comment_infos">
        <img src="../../../../static/test_hot_product.jpg" class="u_photo">
        <span class="u_name">李四</span>
        <span class="u_time">2016-07-07 16:23:44</span>
      </div>
      <div class="comment_text">可不可以防水防火防电</div>
      <div class="comment_picture">
        <!-- <img src="../../../../static/test_hot_product.jpg" alt="">
        <img src="../../../../static/test_hot_product.jpg" alt=""> -->
      </div>
    </div>

    <!-- 一条讨论 -->
    <div class="comment_item">
      <div class="comment_infos">
        <img src="../../../../static/test_hot_product.jpg" class="u_photo">
        <span class="u_name">王五</span>
        <span class="u_time">2016-07-07 16:23:44</span>
      </div>
      <div class="comment_text">过几年会升值吗?</div>
    </div>

    <div class="comment_item" style="text-align: center;border-bottom:0;">
      <span class="none">没有更多了~</span>
    </div>
  </div>
</template>
<style type="text/css">
  .red{color: #eba887;}
  .db_comments {}
  .db_comments .comment_item {
    padding: 0.5rem;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
  }
  .db_comments .comment_item .comment_infos{
    height: 1rem;
    line-height: 1rem;
  }
  .db_comments .comment_item .u_photo{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    vertical-align: top;
  }
  .db_comments .comment_item .u_name{
    color: #9d9d9d;
    font-size: 0.6rem;
    padding:0 0.3rem;
  }
  .db_comments .comment_item .u_time{
    color: #ccc;
    font-size: 0.6rem;
  }
  .db_comments .comment_item .u_rated{
    font-size: 0.6rem;
    margin-left: 0.3rem;
  }
  .db_comments .comment_item .comment_text{
    color: #4a4a4a;
    font-size: 0.6rem;
    line-height: 1rem;
    padding: 0.3rem 0 0 2.5rem;
    box-sizing: border-box;
    text-overflow:clip;
    white-space: normal;
    word-wrap:break-word;
  }
  .comment_item .none{
    font-size: 0.6rem;
    color: #9d9d9d;

  }
  .db_comments .comment_item .comment_picture{
    font-size: 0;
    padding-left: 2.5rem;
    box-sizing: border-box;
  }
  .db_comments .comment_item .comment_picture img{
    display:inline-block;
    width: 2.85rem;
    height: 2.85rem;
    margin: 0.2rem 0.2rem 0 0;
    border: 1px solid #ccc;
  }
</style>