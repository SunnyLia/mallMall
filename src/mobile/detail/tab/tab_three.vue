<template>
  <div class="tabs_rated">
    <!-- 评论结果 -->
    <div class="rated_result">
      <div class="overall">
        <span class="overall_lt">综合评分<i class="red">{{starCount}}</i></span>
        <span class="overall_rt">
          <i class="fa fa-star red" v-for="n in (Math.round(starCount))"></i>
        </span>
      </div>
      <div class="ruler">
        <span>很好<i class="red">{{starNum.veryGood}}</i></span>
        <span>较好<i class="red">{{starNum.preferably}}</i></span>
        <span>一般<i class="red">{{starNum.juetSoSo}}</i></span>
        <span>差<i class="red">{{starNum.aBitBad}}</i></span>
        <span>极差<i class="red">{{starNum.veryBad}}</i></span>
      </div>
    </div>
    <!-- 评论列表 -->
    <div class="db_comments" v-for="(comment,index) in detailTabs.comment">
      <div class="comment_item">
        <div class="comment_infos">
          <img :src="comment.author.avatar" class="u_photo">
          <span class="u_name">{{comment.author.name}}</span>
          <span class="u_time">{{comment.author.update_time}}</span>
          <span class="u_rated">
            <i class="fa fa-star red" v-for="n in comment.score"></i>
          </span>
        </div>
        <div class="comment_text">
          {{comment.text}}
        </div>
        <div class="comment_picture clearfix">
          <img v-for="photos in comment.album_photos" :src="photos.medium_url">
        </div>

        <div class="comment_reply" v-if="comment.replies.length>0">
          <p>共{{comment.replies.length}}条回复</p>
          <div v-for="replys in comment.replies">
            <span>{{replys.author.name}}：</span> {{replys.text}}
          </div>
        </div>
      </div>
      <div class="comment_item" v-if="detailTabs.comment.length<1" style="text-align: center;border-bottom:0;">
        <span class="none">没有更多评价了~</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from "vuex"
  export default{
    data(){
      return{
        starNum:{
          veryGood:0,//很好
          preferably:0,//较好
          juetSoSo:0,//一般
          aBitBad:0,//差的
          veryBad:0//极差
        },
        starCount:0
      }
    },
    computed: {
      ...mapState(['detailTabs'])
    },
    mounted() {
      var that = this;
      var data = this.$store.state.detailTabs.comment;
      $.each(data,function(index, el) {
        if (el.score == 5) {
          that.starNum.veryGood = that.starNum.veryGood+1;
        }else if (el.score == 4) {
          that.starNum.preferably = that.starNum.preferably+1;
        }else if (el.score == 3) {
          that.starNum.juetSoSo = that.starNum.juetSoSo+1;
        }else if (el.score == 2) {
          that.starNum.aBitBad = that.starNum.aBitBad+1;
        }else if (el.score == 1) {
          that.starNum.veryBad = that.starNum.veryBad+1;
        }
      })
      // 求平均分
      var starsCount = (this.starNum.veryGood*5+this.starNum.preferably*4+this.starNum.juetSoSo*3+this.starNum.aBitBad*2+this.starNum.veryBad*1)/(this.starNum.veryGood+this.starNum.preferably+this.starNum.juetSoSo+this.starNum.aBitBad+this.starNum.veryBad);
      this.starCount = Math.round(starsCount*10)/10;
    }
  }
</script>
<style type="text/css">
  .red{color: #eba887;}
  .tabs_rated i{
    font-style: normal;
  }
  .tabs_rated .rated_result{
    text-align: center;
    padding: 0.4rem 0;
    border-bottom: 1px solid #eaeaea;
  }
  .tabs_rated .rated_result .overall{
    font-size: 0.7rem;
    margin-bottom: 0.4rem;
  }
  .tabs_rated .rated_result .overall_lt{
    color: #9d9d9d;
  }
  .tabs_rated .rated_result .ruler{
    font-size: 0.6rem;
    color: #ccc;
  }
  .tabs_rated .rated_result .ruler .red{
    padding: 0 0.4rem 0 0.2rem;
  }
  .comment_reply{
    font-size: 0.5rem;
    color: #5c5c5c;
    margin-left: 2.55rem;
    padding-top: 0.2rem;
  }
  .comment_reply span{
    color: #0aa082;
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
    float: left;
  }
</style>