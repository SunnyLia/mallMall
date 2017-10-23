<template>
  <div class="db_list">
    <list-header></list-header>
    <list-nav></list-nav>
    <div class="db_list_options">
      <div class="items">
        <a href="#" class="active">总和排序 <i class="fa fa-arrow-down"></i></a>
        <a href="#">上架时间 <i class="fa fa-arrow-down"></i></a>
        <a href="#">价格 <i class="fa fa-arrow-down"></i></a>
        <a href="#">喜欢数 <i class="fa fa-arrow-down"></i></a>
      </div>
    </div>
    <List></List>
  </div>
</template>
<script type="text/javascript">
  import ListHeader from '../cateList/listHeader.vue'
  import ListNav from '../cateList/listNav.vue'
  import List from '../list/list.vue'
  import Loading from '../../components/loading.vue'
  import None from '../../components/none.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        products:[],
      }
    },

    components: {
      ListHeader,
      ListNav,
      List,
      Loading,
      None
    }
  }
</script>
<style scoped>
  .db_list_options {
    height: 1.6rem;
    line-height: 1.6rem;
    padding: 0 0.6rem;
  }
  .db_list_options .items{
    width: 100%;
    display: flex;
    display: box;
    display: -webkit-box;
    flex-wrap:nowrap;
    justify-content: center;
  }
  .db_list_options .items a{
    display: block;
    flex: 1;
    box-flex: 1;
    -webkit-box-flex: 1;
    text-align: center;
    color: #ccc;
    font-size: 0.6rem;
  }
  .db_list_options .items a.active{
    color: #f67;
  }
  .db_products .pdt_img{
    position: relative;
  }
</style>
