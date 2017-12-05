<template>
  <div class="cartList">
    <div class="list">
      <div class="content">
        <ul v-for="cart in cartLists">
          <li>
            <div class="listTop clearfix">
              <div class="fl">
                <input type="checkbox" name="checkAll" :checked="isCheckAll" :id="'checkAll'+cart.id" @click="checkAll($event)">
                <label for="'checkAll'+cart.id"></label>
                <a href="cart.url">{{cart.name}}</a>
              </div>
              <!-- <a href="javascript:;" class="fr">删除</a> -->
            </div>
            <ul v-for="item in cart.items">
              <li class="listBot clearfix">
                <div class="checkPos">
                  <input type="checkbox" name="checkList" :id="'checkList'+item.id"  @click="checkList($event)">
                  <label for="'checkList'+item.id"></label>
                </div>
                <a href="item.product_sku.url">
                  <img :src="item.product_sku.master_photo.normal_url" alt="">
                </a>
                <div class="botWord">
                  <h4>{{item.product_sku.title}}</h4>
                  <p class="quality">{{item.product_sku.color}}</p>
                  <div class="botPri clearfix">
                    <p class="fl red">{{item.product_sku.promote_price}}</p>
                    <div class="addSub fr">
                      <i class="fl" @click="sub">-</i>
                      <span>{{item.quantity}}</span>
                      <i class="fr" @click="add">+</i>
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
          <input type="checkbox" name="checkAll"  id="allAll"  @click="allAll($event)">
          <label for="allAll"></label>全选
        </div>
        <div class="fr choice">
          <a href="javascript:;">请选择</a>
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
        count:1,
        isCheckAll:true,
        checkListNum:0
      }
    },
    computed: mapState(['cartLists']),
    methods: {
      add(){//加
        this.count++;
      },
      sub(){//减
        if (this.count > 1) {
          this.count--;
        }else{
          this.count = 1;
        }
      },
      checkAll(e){//全选
        if (e.target.checked || this.isCheckAll == true) {
          $('.checkPos input').each(function(index, el) {
            el.checked=true;
          });
        }else{
          $('.checkPos input').each(function(index, el) {
            el.checked=false;
          });
        }
      },
      checkList(e){//单选
        var listNum = $('.listBot').length;//总的checkbox的数量
        if (e.target.checked) {
          this.checkListNum++;//点击的checkbox的数量
          if (this.checkListNum == listNum) {
            this.isCheckAll = true;
          };
        }else{
          this.isCheckAll = false;
          this.checkListNum--;          
        }
      },
      allAll(e){//总选
        if (e.target.checked) {
          $('.listTop input').each(function(index, el) {
            el.checked=true;
          });
        }else{
          $('.listTop input').each(function(index, el) {
            el.checked=false;
          });
        }
      }
    },
    components: {

    }
  }
</script>
<style scoped>
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