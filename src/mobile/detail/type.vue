<template>
  <div class="type">
    <!-- 选择颜色和尺码 -->
    <div class="db_detail_choice">
      <div class="choice_style">
        <label class="choice_title">颜色</label>
        <div class="choice_items">
          <span v-for="(item,index) in colors" :class="{active:index==isColors}" @click="isColors=index">{{item}}</span>
        </div>
      </div>
      <div class="choice_style">
        <label class="choice_title">尺寸</label>
        <div class="choice_items">
          <span v-for="(item,index) in size" :class="{active:index==isSize}" @click="isSize=index">{{item}}</span>
        </div>
      </div>
    </div>
    <!-- 选择数量 -->
    <div class="db_detail_num">
      <label class="num_title">数量</label>
      <div class="num_option">
        <span class="minus" :class="{active:number>1}" @click="minus">-</span>
        <input type="number" name="number" class="number" v-model="number">
        <span class="addition" :class="{active:number>0}" @click="addition">+</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        isColors:0,
        isSize:0,
        number:1,
        colors:['白色','青色','紫色'],
        size: ['S','M',"L","Xl"]
      }
    },
    watch: {
      // 监听数量的值
      number: function(val,oldVal){
        if(val<0){
          this.number = 1;
        }else{
          this.number = parseInt(val);
        }
      }
    },
    methods:{
       //数量减函数
       minus() {
        if(this.number>0){
          this.number--;
        }
      },
      //数量加函数
      addition() {
        if(isNaN(this.number)){
          this.number = 0;
        }
        this.number++;
      }
    }
  }
</script>
<style scoped>
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
    padding: 0 1rem;
    text-align: center;
    margin: 0 0.2rem;
    color: #fff;
    font-size: 0.5rem;
    border-radius: 0.5rem;
    background-color: #ccc;
  }
  .choice_items span.active{
    color: #fff;
    background-color: #68cb78;
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
    background-color: #68cb78;
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