<template>
  <div class="type">
    <!-- 选择颜色和尺码 -->
    <div class="db_detail_choice">
      <div class="choice_style">
        <label class="choice_title">颜色</label>
        <div class="choice_items">
          <span v-for="(item,index) in detailInfos.sku_info" :class="{active:index==isColors}" @click="isColors=index;isSize=0;passData(index);">{{item.color}}</span>
        </div>
      </div>
      <div class="choice_style">
        <label class="choice_title">尺寸</label>
        <div class="choice_items">
          <div v-for="(item,index) in detailInfos.sku_info" v-if="index==isColors">
            <span v-for="(sizes,i) in item.items" :class="{active:i==isSize}" @click="isSize=i;number=1;">{{sizes.size}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择数量 -->
    <div class="db_detail_num">
      <label class="num_title">数量</label>
      <div class="num_option" v-for="(item,index) in detailInfos.sku_info" v-if="index==isColors">
        <div v-for="(stocks,i) in item.items" v-if="i==isSize">
          <span class="minus" :class="{active:number>1}" @click="minus">-</span>
          <input type="number" name="number" class="number" v-model="number" :class="{grayColor:stocks.stock<1}" :disabled="stocks.stock<1">
          <span class="addition" :class="{active:number<stocks.stock}" @click="addition">+</span>
          <span class="num_stock" :data="stocks.stock">库存{{stocks.stock}}件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapActions} from 'vuex'
  export default {
    data() {
      return {
        isColors:0,//颜色索引
        isSize:0,//尺寸索引
        number:1//数量
      }
    },
    computed: {
      ...mapState(['detailInfos'])
    },
    watch: {
      // 监听数量的值
      number: function(val,oldVal){
        var stockNum = $('.num_stock').attr('data');
        if(val<1){
          this.number = 1;
        }else if(val>stockNum){
          this.number = stockNum;
        }else{
          this.number = parseInt(val);
        }
      }
    },
    methods:{
      //数量减函数
      minus() {
        if(this.number>1){
          this.number--;
        }
      },
      //数量加函数
      addition() {
        var stockNum = $('.num_stock').attr('data');
        console.log(stockNum)
        if(isNaN(this.number)){
          this.number = 1;
        }else if(this.number < stockNum){
          this.number++;
        }
      },
      passData(index){//传给detail组件的数据
        this.$emit('typeDate',index);
      }
    }
  }
</script>
<style scoped>
.grayColor{
  color:#fff!important;
}
  .db_detail_num .num_stock{
    font-size: 0.55rem;
    color: #ccc;
    margin-left: 0.5rem;
  }
  .db_detail_choice{
    padding: 0.3rem 0.5rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .db_detail_choice .choice_style{
    display: -webkit-box;
    display: -webkit-flex;
    display: box;
    display: flex;
    line-height: 1rem;
    align-items:center;
    margin: 0.5rem 0;
  }
  .db_detail_choice .choice_title{
    display: inline-block;
    width: 2rem;
    color: #9b9b9b;
    font-size: 0.6rem;
  }
  .db_detail_choice .choice_items{
    align-items:center;
    line-height: 1rem;
    font-size: 0;
    display: flex;
    display: -webkit-flex;
  }

  .choice_items span{
    display: inline-block;
    padding: 0 0.7rem;
    text-align: center;
    margin: 0 0.2rem;
    color: #fff;
    font-size: 0.5rem;
    border-radius: 0.5rem;
    background-color: #ccc;
  }
  .choice_items span.active{
    color: #fff;
    background-color: #0aa082;
  }

  .db_detail_num{
    display: -webkit-flex;
    display: flex;
    align-items:center;
    width: 100%;
    height: 2.5rem;
    padding: 0.3rem 0.5rem;
    border-bottom: 1px solid #f0f0f0;
  } 
  .db_detail_num .num_title{
    display: inline-block;
    width: 2rem;
    color: #9b9b9b;
    font-size: 0.6rem;
  }
  .db_detail_num .num_option{
    display: flex;
    align-items:center;
    font-size: 0;
    margin-left: 0.2rem;
  }
  .num_option .minus,
  .num_option .addition{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: #ccc;
    border-radius: 50%;
  }

  .num_option span.active{
    background-color: #0aa082;
  }
  
  .num_option .number{
    display: inline-block;
    width: 3rem;
    height: 1rem;
    line-height: 1rem;
    color: #333;
    font-size: 0.6rem;
    text-align: center;
    margin: 0 0.4rem;
    border: none;
    vertical-align: top;
    background-color: #ccc;
    border-radius: 0.5rem;
  }

</style>