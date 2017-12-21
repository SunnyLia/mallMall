<template>
  <!-- 讨论列表 -->
  <div class="db_comments">
    <div v-for="(discuss,index) in detailTabs.discuss">
      <div class="comment_item">
        <div class="comment_infos">
          <img :src="discuss.author.avatar" class="u_photo">
          <span class="u_name">{{discuss.author.name}}</span>
          <span class="u_time">{{discuss.author.create_time}}</span>
          <div class="u_reply">
            <span @click="tank(index)">...</span>
            <div class="u_reply_rep" style="display:none;" @click="reply(index);">回复</div>
          </div>
        </div>
        <div class="comment_reply" v-if="discuss.ref_user">
          <i>|</i> 回复:<span>{{discuss.ref_user.name}}</span> {{discuss.ref_text}}
        </div>
        <div class="comment_text">{{discuss.text}}</div>
      </div>
      <div class="comment_item" v-if="detailTabs.discuss.length<1" style="text-align: center;border-bottom:0;">
        <span class="none">还没有人参加讨论哦~</span>
      </div>
    </div>
    <!-- 回复弹出框 -->
    <div class="reply_mask" v-if="mask_show" @click="mask();">
      <div class="r_mask_input" @click.stop="">
        <div class="at">@
          <i>{{detailTabs.discuss[currentIndex].author.name}}</i>
          <span>{{detailTabs.discuss[currentIndex].text}}</span>
        </div>
        <div class="input">
          <input type="text">
          <a href="javascript:;">发送</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from "vuex"
  export default{
    data(){
      return{
        mask_show:false,
        currentIndex:0
      }
    },
    computed: {
      ...mapState(['detailTabs'])
    },
    methods:{
      tank(index){//点击...
        $('.u_reply_rep').eq(index).show();
      },
      reply(index){//点击回复
        $('.u_reply_rep').eq(index).hide();
        this.mask_show = true;
        this.currentIndex = index;
      },
      mask(){//点击遮罩层
        this.mask_show = false
      }
    }
  }
</script>
<style type="text/css">
  .red{color: #eba887;}
  .comment_reply{
    font-size: 0.5rem;
    color: #5c5c5c;
    margin-left: 2.55rem;
    padding-top: 0.2rem;
  }
  .comment_reply span{
    color: #0aa082;
  }
  .comment_reply i{
    font-size: 0.7rem;
  }
  .reply_mask{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
  }
  .r_mask_input{
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 100001;
  }
  .r_mask_input .input{
    height: 1.7rem;
    color: #5c5c5c;
    padding: 0.2rem 0.5rem;
    padding-right: 4rem;
    position: relative;
  }
  .r_mask_input .input input{
    height: 100%;
    width: 100%;
    border:  1px solid #e4e4e4;
    color: #5c5c5c;
    padding: 0 0.2rem;
  }
  .r_mask_input .input a{
    font-size: 0.55rem;
    width: 3rem;
    height: 1.3rem;
    position: absolute;
    right: 0.5rem;
    top: 0.25rem;
    background-color: #0aa082;
    color: #fff;
    text-align: center;
    line-height: 1.3rem;
  }
  .r_mask_input .at{
    padding: 0.3rem 0.5rem;
    font-size: 0.55rem;
    color: #5c5c5c;
    border-bottom: 1px solid #e4e4e4;
  }
  .r_mask_input .at i{
    color: #0aa082;
    margin-right: 0.2rem;
  }
  .db_comments .comment_item {
    padding: 0.5rem;
    border-bottom: 1px solid #eaeaea;
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
  .db_comments .comment_item .u_reply{
    float: right;
    color: #9d9d9d;
    position: relative;
  }
  .comment_item .u_reply .u_reply_rep{
    position: absolute;
    bottom: -1.2rem;
    right: 0;
    width: 2.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    border:1px solid #9a9a9a;
    font-size: 0.5rem;
    border-radius: 0.15rem;
    background-color: #fff;
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
    line-height: 0.8rem;
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
</style>