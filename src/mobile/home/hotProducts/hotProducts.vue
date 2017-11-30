<template>
  <div class="db_hot_product db_products">
    <ul class="clearfix">
      <li v-for="product in hotProducts" :class="{fullLi:product.id==5}">
        <div class="pdt_item">
          <a :href="product.url" class="pdt_img">
            <img :src="product.src" height="300" width="300">
          </a>
          <div class="pdt_detail">
            <h3 class="pdt_title">
              <a :href="product.url">{{product.title}}</a>
            </h3>
            <p class="pdt_price">
              <span class="pdt_new_price">{{product.price}}</span>
              <del class="pdt_old_price">{{product.market_price}}</del>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapActions} from 'vuex'
  export default {
    data:function(){
      return{
      }
    },
    computed: mapState(['hotProducts']),
    methods:{
     // ...mapActions(['hotProduct']),
   },
   mounted:function(){
    this.$store.dispatch('hotProduct')
  }
}
</script>
<style scoped>
  .db_products{
    padding: 0.2rem;
  }
  .db_products ul li{
    width: 50%;
    float: left;
    padding: 0 0.2rem;
    margin: 0.2rem 0;
    box-sizing: border-box;
  }
  .db_products .pdt_item{
    background-color: #fff;
    box-shadow: 0 0 0.4rem #ccc;
  }
  .db_products .pdt_img{
    display: block;
    width: 100%;
    height: 7rem;
    position: relative;
  }
  .db_products .pdt_img img{
    max-width: 100%;
    max-height: 100%;
  }
  .fullLi{
    width: 100%!important;
  }
   .fullLi .pdt_item .pdt_img{
    height: 12rem;
   }
  .db_products .pdt_detail{
    padding:0.2rem;
    box-sizing: border-box;
    font-size: 0.5rem;
    height: 1.8rem;
  }
  .db_products .pdt_title a{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.6rem;
  }
  .db_products .pdt_new_price{
    color: #e17c72;
    font-weight: 600;
  }
  .db_products .pdt_old_price{
    color: #ccc;
  }

</style>