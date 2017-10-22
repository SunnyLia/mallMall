<template>
  <div>
    <!-- 选项卡 -->
    <div class="db_detail_tabs">
      <span @click="toggleTabs('TabOne',$event)" data-id="0" :class="{active:0==isActive}">商品详情</span>
      <span @click="toggleTabs('TabTwo',$event)" data-id="1" :class="{active:1==isActive}">评价<i>2</i></span>
      <span @click="toggleTabs('TabThree',$event)" data-id="2" :class="{active:2==isActive}">讨论</span>
    </div>

    <!-- tabs内容块-->
    <div class="db_detail_conts">
      <component :is="componentId"></component>
    </div>
  </div>
</template>
<script type="text/javascript">
  import TabOne from './tab_one.vue'
  import TabTwo from './tab_two.vue'
  import TabThree from './tab_three.vue'

  export default{
    data:function(){
      return{
        componentId:'TabOne',
        isActive:0
      }
    },
    methods: {
      toggleTabs(componentId,e){
        this.isActive = e.target.getAttribute('data-id');
        this.componentId = componentId;
      }
    },
    components:{
      TabOne,
      TabTwo,
      TabThree
    }
  }
</script>
<style scoped>
  .db_detail_tabs {
    display: -webkit-box;
    display: -webkit-flex;
    display: box;
    display: flex;
    height:40px;
    margin-top: 30px;
    border-bottom: 2px solid #e17c72;
  }
  .db_detail_tabs span{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    box-flex: 1;
    flex: 1;
    line-height: 40px;
    text-align: center;
    color: #666;
    font-size: 16px;
  }
  .db_detail_tabs span.active{
    color: #e17c72;
  }
  .db_detail_tabs span i{
    font-style: normal;
  }
</style>