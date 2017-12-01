<template>
  <div class="addressMask">
    <div class="mask">
      <div class="title">
        <h4 class="fl">新建地址</h4>
        <span class="fr">x</span>
      </div>
      <form class="_2c04j7gQ">
        <div class="Uzk2mMNz _1hXzVb0s required">
          <input type="text" placeholder="收货人姓名" class="_2vqbOM4U" name="user_name">
        </div>
        <div class="Uzk2mMNz _1hXzVb0s required">
          <input type="number" placeholder="收货人电话号码" class="_2vqbOM4U" name="phone">
        </div>
        <div class="Uzk2mMNz _1hXzVb0s noborder flex required">
          <!-- 选择省 -->
          <div class="_2k7DI6oJ">
            <select class="_14JMJHXz" name="province_id">
              <option value="">选择省</option>
            </select>
            <i class="_1NsvL34K"></i>
          </div>
          <!-- 选择市 -->
          <div class="_2k7DI6oJ">
            <select class="_14JMJHXz pending" name="city_id" disabled="">
              <option>选择市</option>
            </select>
            <i class="_1NsvL34K"></i>
          </div>
          <!-- 选择县 -->
          <div class="_2k7DI6oJ">
            <select class="_14JMJHXz pending" name="district_id" disabled="">
              <option>选择地区</option>
            </select>
            <i class="_1NsvL34K"></i>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import MineHeader from '@/mobile/mine/mineHeader/mineHeader.vue'

  export default {
    data() {
      return {

      }
    },
    mounted() {  
    },    
    methods: {
    },
    components: {
      MineHeader
    }
  }
</script>
<style scoped>
  ._2c04j7gQ ._2k7DI6oJ ._1NsvL34K{
    position: absolute;
    border-top: 0.05rem solid #9b9b9b;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-width: 0.2rem;
    right: 0.3rem;
    top: 0.7rem;
  }
  ._2c04j7gQ ._14JMJHXz option{
    font-size: 0.5rem;
    line-height: 1.6rem;
    color: #000;
  }
  .Uzk2mMNz select{
    line-height: 1.6rem;
    height: 1.6rem;
    border-radius: 0;
    width: 100%;
    padding: 0 0.5rem;
    font-size: 0.6rem;
    border: 0;
  }
  .Uzk2mMNz.flex select{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  ._2c04j7gQ ._2k7DI6oJ{
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 33%;
    margin-right: 0.5rem;
    border:1px solid #e4e4e4;
  }

  .Uzk2mMNz input[type=text],.Uzk2mMNz input[type=number]{
    background-color: #fff;
    border: none;
    box-sizing: border-box;
    color: #000;
    vertical-align: middle;
    outline: none;
    width: 100%;
    resize: none;
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: 0.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .Uzk2mMNz.required:before{
    position: absolute;
    content: "*";
    color: #f05f50;
    left: -0.6rem;
    top: 0.55rem;
  }
  ._2c04j7gQ ._1hXzVb0s{
    margin-bottom: 0.5rem;
    border:1px solid #e4e4e4;
  }
  .Uzk2mMNz.flex{
    border: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }
  .Uzk2mMNz{
    position: relative;
  }
  ._2c04j7gQ{
    padding-right: 0.5rem;
    padding-left:1rem;
  }
  .addressMask{
    background-color: #f7f7f7;
  }
  .addressMask .mask .title{
    height: 2rem;
    line-height: 2rem;
    padding: 0 0.5rem;
  }
  .addressMask .mask .title h4{
    font-size: 0.6rem;
  }
  .addressMask .mask .title span{
    padding:0 0.2rem 0 1rem;
    font-size: 0.85rem;
    color: #666;
  }
</style>