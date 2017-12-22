<template>
  <div class="db_goodsList" v-infinite-scroll="getData" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <ul class="clearfix">
      <li v-for="product in searchLists">
        <div class="pdt_item">
          <router-link :to="{path:'/detail'}" class="pdt_img">
          <img v-lazy="product.cover_url">
          <i class="fa fa-heart-o" v-on:click="onHeart($event)"></i>
        </router-link>
        <div class="pdt_detail">
          <h3 class="pdt_title">
            <a :href="product.url">{{product.title}}</a>
          </h3>
          <p class="pdt_price">
            <span class="pdt_new_price">{{product.price}}</span>
            <del class="pdt_old_price" v-if="product.price!=product.market_price">{{product.market_price}}</del>
          </p>
        </div>
      </div>
    </li>
    <!-- 没有数据了 -->
    <loading v-show="isShowLoadingTips"></loading>
    <none v-show="isShowLoadedTips"></none> 
  </ul>
</div>
</template>
<script type="text/javascript">
 import {mapState,mapActions} from 'vuex'
 import Loading from '@/components/loading/loading.vue'
 import None from '@/components/none/none.vue'
 export default {
  data:function(){
    return{
      flag: true
    }
  },
  computed: {
    ...mapState([
      'searchLists',
      'isShowLoadingTips',
      'isShowLoadedTips',
      'busy'
      ])
  },
  // mounted() {
  //   var val = this.$route.params.id;
  //   this.$store.dispatch('categoryList',val);
  // },
  methods:{
    getData(){
      var val = this.$route.params.id;
      this.$store.dispatch('categoryList',val);
    },
    onHeart(e){
      if(this.flag){
        e.target.className="fa fa-heart";
        this.flag = false;
      }else{
        e.target.className="fa fa-heart-o";
        this.flag = true;
      }
      e.preventDefault();
    }
  },
  components:{
    Loading,
    None
  }
}
</script>
<style scoped>
  .db_goodsList{

    padding: 0 0.2rem;
  }
  .db_goodsList ul li{
    width: 50%;
    float: left;
    padding: 0 0.2rem;
    margin-bottom: 0.4rem;
    box-sizing: border-box;
  }
  .db_goodsList .pdt_item{
    background-color: #fff;
    box-shadow: 0 0 0.4rem #ccc;
  }
  .db_goodsList .pdt_img{
    display: block;
    width: 100%;
    height: 7.5rem;
    position: relative;
  }
  .db_goodsList .pdt_img img{
    width: 100%;
    height: 100%;
  }
  .db_goodsList .pdt_detail{
    padding:0.2rem;
    box-sizing: border-box;
    font-size: 0.5rem;
    height: 1.8rem;
  }
  .db_goodsList .pdt_title a{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #ccc;
    font-size: 0.6rem;
  }
  .db_goodsList .pdt_new_price{
    color: #e17c72;
    font-weight: 600;
  }
  .db_goodsList .pdt_old_price{
    color: #ccc;
  }
  .db_goodsList .pdt_img .fa{
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    color: #e17c72;
    font-size: 0.7rem;
  }
</style>