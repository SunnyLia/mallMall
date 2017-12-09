<template>
  <div class="list_nav">
    <ul v-for="cate in categorys" v-if="cate.id == id" v-show="cate.categoryList.length>0">
      <li @click="addClass($event)" :class="{'cur':index==0}" v-for="(list,index) in cate.categoryList" :data="list.id">{{list.text}}</li>
    </ul>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    data(){
      return {
      }
    },
    computed: {
      ...mapState(['categorys']),
      id(){
        return this.$route.params.id;
      }
    },
    mounted(){

    },
    methods:{
      addClass:function(e){

        $(e.target).addClass('cur');
        $(e.target).siblings().removeClass('cur')
        var val = e.target.getAttribute('data');
        this.$store.dispatch('categoryList',val);
      }
    }
  }
</script>
<style scoped>
  .list_nav{
    overflow: hidden;
  }
  .list_nav ul{
    background-color: #0aa082;
    width: auto;
    height: 1.6rem;
    line-height: 1.6rem;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list_nav ul li{
    display: inline-block;
    padding: 0 0.6rem;
    color: #333;
    font-size: 0.6rem;
  }
  .list_nav ul li.cur{
    color: #fff;
  }

</style>