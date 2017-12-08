<template>
  <div class="cartList">
    <div class="list">
      <div class="content">
        <ul>
          <li v-for="(cart,index) in cartLists">
            <div class="listTop clearfix">
              <div class="fl">
                <input type="checkbox" name="checkAll" :checked="cart.checked" :id="'checkAll'+cart.id" @click="checkAll(index)">
                <label :for="'checkAll'+cart.id"></label>
                <a :href="cart.url">{{cart.name}}</a>
              </div>
              <!-- <a href="javascript:;" class="fr">删除</a> -->
            </div>
            <ul>
              <li class="listBot clearfix" v-for="(item,i) in cart.items">
                <div class="checkPos">
                  <input type="checkbox" name="checkList" :checked="item.checked" :id="'checkList'+item.id"  @click="checkList(i,index)">
                  <label :for="'checkList'+item.id"></label>
                </div>
                <a :href="item.product_sku.url">
                  <img :src="item.product_sku.master_photo.normal_url" alt="">
                </a>
                <div class="botWord">
                  <h4>{{item.product_sku.title}}</h4>
                  <p class="quality">{{item.product_sku.color}}</p>
                  <div class="botPri clearfix">
                    <p class="fl red">{{item.product_sku.promote_price}}</p>
                    <div class="addSub fr">
                      <i class="fl" @click="sub(index,i)">-</i>
                      <span>{{item.quantity}}</span>
                      <i class="fr" @click="add(index,i)">+</i>
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
          <input type="checkbox" name="checkAll" :checked="isAllAll" id="allAll"  @click="allAll()">
          <label for="allAll"></label>全选
        </div>
        <div class="fr choice">
          <a href="javascript:;" :class="{'choAll':isAllAll}">{{isAllAll?cartLists.total_amount:'请选择'}}</a>
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
        checkListNum:0
      }
    },
    computed: mapState(['cartLists']),
    methods: {
      add(index,i){//加
        this.cartLists[index].items[i].quantity++;
      },
      sub(index,i){//减
        var count = this.cartLists[index].items[i].quantity;
        if (count > 1) {
          count--;
        }else{
          count = 1;
        }
        this.cartLists[index].items[i].quantity = count;
      },

      // 全部总选
      allAll : function() {
        var flag = true;
        if ( this.isAllAll ) {
          flag = false;
        }
        for ( var i = 0, len = this.cartLists.length; i < len; i++ ) {
          this.cartLists[i]['checked'] = flag;
          var list = this.cartLists[i]['items'];
          for ( var j = 0, len1 = list.length; j < len1; j++ ) {
            list[j]['checked'] = flag;
          }
        }
        this.isAllAll = !this.isAllAll;
      },

      // 店铺全选
      checkAll : function( index) {
        var list = this.cartLists[index]['items'],
        len = list.length;
        if ( this.cartLists[index]['checked'] ) {
          for (var i = 0; i < len; i++ ) {
            list[i]['checked'] = false;
          }
        } else {
          for (var i = 0; i < len; i++ ) {
            list[i]['checked'] = true;
          }
        }
        this.cartLists[index]['checked'] = !this.cartLists[index]['checked'];
        // 判断是否选择所有商品的全选
        this.isChooseAll();
      },

      // 单个选择
      checkList : function( i, index) {
        var list = this.cartLists[i]['items'],
        len = list.length;
        if ( list[index]['checked'] ) {
          this.cartLists[i]['checked'] = false;
          this.isAllAll = false;
          list[index]['checked'] = !list[index]['checked'];
        } else {
          list[index]['checked'] = !list[index]['checked'];
          // 判断是否选择当前店铺的全选
          var flag = true;
          for (var i = 0; i < len; i++ ) {
            if ( list[i]['checked'] == false ) {
              flag = false;
              break;
            }
          }
          flag == true ? this.cartLists[i]['checked'] = true : this.cartLists[i]['checked'] = false;
        }
        // 判断是否选择所有商品的全选
        this.isChooseAll();
      },

      // 判断是否选择所有商品的全选
      isChooseAll : function() {
        var flag1 = true;
        for ( var i = 0, len = this.cartLists.length; i < len; i++ ) {
          if ( this.cartLists[i]['checked'] == false ) {
            flag1 = false;
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
    height: 100%;
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
    top:0.18rem;
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