<template>
  <div class="cartList">
    <div class="list">
      <ul>
        <li>
          <div class="listTop clearfix">
            <div class="fl">
              <input type="checkbox" name="checkAll" :checked="isCheckAll" id="checkAll" @click="checkAll($event)">
              <label for="checkAll"></label>
              <a href="javascript">三顿半</a>
            </div>
            <a href="javascript:;" class="fr">删除</a>
          </div>
          <ul>
            <li class="listBot clearfix">
              <div class="checkPos">
                <input type="checkbox" name="checkList" id="checkList1"  @click="checkList($event)">
                <label for="checkList1"></label>
              </div>
              <a href="javascript:;">
                <img src="../../../assets/imgs/user_large.jpg" alt="">
              </a>
              <div class="botWord">
                <h4>三顿半 | 第2代SENSE LIVING系列  手冲挂耳咖啡大满贯套装</h4>
                <p class="quality">云崖灰</p>
                <div class="botPri clearfix">
                  <p class="fl red">￥198.00</p>
                  <div class="addSub fr">
                    <i class="fl" @click="sub">-</i>
                    <span>{{count}}</span>
                    <i class="fr" @click="add">+</i>
                  </div>
                </div>
              </div>
            </li>
            <li class="listBot clearfix">
              <div class="checkPos">
                <input type="checkbox" name="checkList" id="checkList2"  @click="checkList($event)">
                <label for="checkList2"></label>
              </div>
              <a href="javascript:;">
                <img src="../../../assets/imgs/user_large.jpg" alt="">
              </a>
              <div class="botWord">
                <h4>三顿半 | 第2代SENSE LIVING系列  手冲挂耳咖啡大满贯套装</h4>
                <p class="quality">云崖灰</p>
                <div class="botPri clearfix">
                  <p class="fl red">￥198.00</p>
                  <div class="addSub fr">
                    <i class="fl" @click="sub">-</i>
                    <span>{{count}}</span>
                    <i class="fr" @click="add">+</i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        count:0,
        isCheckAll:false,
        checkListNum:0
      }
    },
    methods: {
      add(){
        this.count++;
      },
      sub(){
        if (this.count > 0) {
          this.count--;
        }else{
          this.count = 0;
        }
      },
      checkAll(e){
        if (e.target.checked) {
          $('.checkPos input').each(function(index, el) {
            el.checked=true;
          });
        }else{
          $('.checkPos input').each(function(index, el) {
            el.checked=false;
          });
        }
        // this.isCheckAll = !this.isCheckAll
      },
      checkList(e){
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
      }
    },
    components: {

    }
  }
</script>
<style scoped>
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