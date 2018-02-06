<template>
  <div class="cartList">
    <div class="list">
      <div class="content">
        <ul>
          <li v-for="(cart,index) in cartLists" class="itemLi">
            <div class="listTop clearfix">
              <div class="fl">
                <input type="checkbox" name="checkAll" :checked="cart.checked" :id="'checkAll'+cart.id" @click="checkAll(index)">
                <label :for="'checkAll'+cart.id"></label>
                <a :href="cart.url">{{cart.name}}</a>
              </div>
              <!-- <a href="javascript:;" class="fr">删除</a> -->
            </div>
            <ul>
              <li class="listBot clearfix" v-for="(item,i) in cart.items" :data-total="item.amount">
                <div class="checkPos">
                  <input type="checkbox" name="checkList" :checked="item.checked" :id="'checkList'+item.id"  @click="checkList(index,i,$event)">
                  <label :for="'checkList'+item.id"></label>
                </div>
                <a :href="item.product_sku.url">
                  <img v-lazy="item.product_sku.master_photo.normal_url" alt="">
                </a>
                <div class="botWord">
                  <h4>{{item.product_sku.title}}</h4>
                  <p class="quality">{{item.product_sku.color}}</p>
                  <div class="botPri clearfix">
                    <p class="fl red">{{item.product_sku.promote_price}}</p>
                    <div class="addSub fr">
                      <i class="fl" @click="sub(index,i,$event)">-</i>
                      <span>{{item.quantity}}</span>
                      <i class="fr" @click="add(index,i,$event)">+</i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="fl allAll">
          <input type="checkbox" name="allAll" :checked="isAllAll" id="allAll"  @click="allAll()">
          <label for="allAll"></label>全选
        </div>
        <div class="fr choice">
          <a href="javascript:;" :class="{'choAll':totalMoney>0}">{{totalMoney>0?totalMoney+".00":"请选择"}}</a>
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
        isAllAll:false,//是否总选
        totalMoney:0//总价钱
      }
    },
    computed: mapState(['cartLists']),
    methods: {
      add(index,i,event){//加
        var price = parseInt($(event.target).parent().prev('.red').text());
        var number = parseInt($(event.target).siblings('span').text());
        number++;
        $('.itemLi').eq(index).find('.listBot').eq(i).attr('data-total',price*number);
        this.cartLists[index].items[i].quantity = number;
      },
      sub(index,i,event){//减
        var price = parseInt($(event.target).parent().prev('.red').text());
        var number = parseInt($(event.target).siblings('span').text());
        if (number > 1) {
          number--;    
          $('.itemLi').eq(index).find('.listBot').eq(i).attr('data-total',price*number);                                   
        }else{
          number = 1;
        }
        this.cartLists[index].items[i].quantity = number;
      },
      allAll() {// 全部总选
        var flag = true;
        if ( this.isAllAll ) {
          flag = false;
        }
        for ( var i = 0; i < this.cartLists.length; i++ ) {//遍历店铺数量
          //计算所有店铺商品总价钱
          if (flag == true) {
            this.totalMoney=this.totalMoney+parseInt(this.cartLists[i].total_amount);
          }else{
            this.totalMoney=0;
          }
          this.cartLists[i].checked = flag;//店铺checked
          var list = this.cartLists[i].items;
          for ( var j = 0, len1 = list.length; j < len1; j++ ) {//遍历店铺商品
            list[j].checked = flag;
          }
        }
        this.isAllAll = !this.isAllAll;
      },      
      checkAll(index) {// 店铺全选
        var list = this.cartLists[index].items;
        var total = 0;
        for (var i = $('.itemLi').eq(index).find('.listBot').length - 1; i >= 0; i--) {
          total = total + parseInt($('.itemLi').eq(index).find('.listBot').eq(i).attr('data-total'));
        };
        if ( this.cartLists[index].checked ) {//当前店铺未中
          if (this.totalMoney>0) {
            this.totalMoney=this.totalMoney-total;//计算店铺总价钱
          };
          for (var i = 0; i < list.length; i++ ) {//遍历当前店铺商品
            list[i].checked = false;
          }
        } else {//当前店铺选中
          this.totalMoney=this.totalMoney+total;//计算店铺总价钱
          for (var i = 0; i < list.length; i++ ) {//遍历当前店铺商品
            list[i].checked = true;
          }
        }
        this.cartLists[index].checked = !this.cartLists[index].checked;
        // 判断是否选择所有商品的全选
        this.isChooseAll();
      },
      checkList(index,i,event) { // 单个选择
        var list = this.cartLists[index].items;
        var amount = parseInt($(event.target).parent().parent().attr('data-total'));
        if ( list[i].checked ) {//当前商品未中
          if (this.totalMoney>0) {
            this.totalMoney=this.totalMoney-amount;//计算当前总价钱
          };
          this.cartLists[index].checked = false;//当前店铺未中
          this.isAllAll = false;//总选未中
          list[i].checked = !list[i].checked;
        } else {//当前商品选中
          this.totalMoney=this.totalMoney+amount;//计算当前总价钱
          list[i].checked = !list[i].checked;
          // 判断是否选择当前店铺的全选
          var flag = true;
          for (var i = 0; i < list.length; i++ ) {//遍历当前店铺商品
            if ( list[i].checked == false ) {//当前商品未中
              flag = false;//只要有一个商品没选，不成立
              break;
            }
          }
          flag == true ? this.cartLists[index].checked = true : this.cartLists[index].checked = false;
        }
        // 判断是否选择所有商品的全选
        this.isChooseAll();
      },
      isChooseAll() { // 判断是否选择所有商品的全选
        var flag1 = true;
        for ( var i = 0; i < this.cartLists.length; i++ ) {//遍历店铺数量
          if ( this.cartLists[i].checked == false ) {//店铺未中
            flag1 = false;//只要有一个店铺没选，不成立
            break;
          }
        }
        flag1 == true ? this.isAllAll = true : this.isAllAll = false;
      }
    },
    components: {

    }
  }

</script>
<style scoped>
  .choAll{
    background-color: #0aa082!important;
  }
  .cartList .list{
    margin-bottom: 2.2rem;
  }
  .footer .allAll{
    margin-left: 0.5rem;
  }
  .footer .choice a{
    display: inline-block;;
    height: 1.7rem;
    width: 4.5rem;
    background-color: #9a9a9a;
    text-align: center;
    color: #fff;
  }
  .footer{
    background-color: #fff;
    height: 1.7rem;
    line-height: 1.7rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    font-size: 0.6rem;
  }
  .listBot .botWord .botPri .red{
    font-size: 0.6rem;
    color: #f05f50;
    line-height: 1.2rem;
  }
  .listBot .botWord .botPri{
    overflow: hidden;
  }
  .listBot .botWord .botPri .addSub i{
    width: 1.2rem;
    height: 100%;
    text-align: center;
    background-color: #e4e4e4;
    font-size: 0.9rem;
  }
  .listBot .botWord .botPri .addSub{
    width: 4rem;
    height: 1.2rem;
    border: 1px solid #e4e4e4;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 1.2rem;
  }
  .listBot .botWord .quality{
    overflow: hidden;
    color: #5c5c5c;
    font-size: 0.5rem;
    margin-top:0.5rem;
  }
  .listBot .botWord{
    font-size: 0.6rem;
  }
  .listBot .botWord h4{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: normal;
    height: 1.6rem;
  }
  .listBot a{
    display: inline-block;
    float: left;

    margin-right: 0.5rem;
  }
  .listBot a img{
    height: 3.5rem;
    width: 3.5rem;
  }
  .listBot .checkPos{
    position: absolute;
    left: 0.5rem;
    top: 1.7rem;
  }
  .listBot{
    position: relative;
    margin-top: 0!important;
    border-bottom: 0!important;
    padding: 0.5rem 0.5rem 0.3rem 1.5rem;
  }
  input[type=checkbox]{
    display: none;
  }
  input[type="checkbox"]+label{
    position: relative;
    height: 0.8rem;
    width: 0.8rem;
    background:url(../../../assets/imgs/check_uncheck.png) no-repeat;
    background-size: cover;
    display: inline-block;
    top:0.1rem;
  }
  input[type=checkbox]:checked+label{
    background:url(../../../assets/imgs/check_checked.png) no-repeat;
    background-size: cover;
  }
  .cartList .list li{
    margin-top: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
  }
  .cartList .list li .listTop{
    padding: 0 0.5rem;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .cartList .list li .listTop a{
    font-size: 0.6rem;
  }
</style>