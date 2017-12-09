<template>
  <div class="category">
    <Headers></Headers>
    <Navs></Navs>
    <div class="category_list">
      <ul>
        <li v-for="(cty,index) in categorys" v-if="index < 9">
          <router-link :to="{path:cty.url,params:{id:cty.id}}" :class="cty.class_name">{{cty.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import Headers from '@/components/header/Header.vue'
  import Navs from '@/components/nav/Nav.vue'
  export default{
    computed: mapState(['categorys']),
    mounted() {
      this.$store.dispatch('category');
    },
    components:{
      Headers,
      Navs
    }
  }
</script>
<style scoped>
  .category_list{
    font-size: 0;
    text-align: center;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
  }
  .category_list ul li{
    display: inline-block;
    width: 33.3%;
    height: 2.2rem;
    padding: 0 0.1rem;
    margin: 0.1rem 0;
  }
  .category_list a{
    display: block;
    line-height: 2.2rem;
    text-align: center;
    color: #4a4a4a;
    font-size: 0.6rem;
    border-radius: 0.2rem;
  }
  .category_list .red{
    background-color: #ffb2bb;
  }
  .category_list .blue{
    background-color: #89b7ec;
  }
  .category_list .purple{
    background-color: #c2a0e0;
  }
  .category_list .sky{
    background-color: #b2e6ff;
  }
  .category_list .yellow{
    background-color: #e6e7a4;
  }
  .category_list .pink{
    background-color: #e0a0d1;
  }
  .category_list .grass{
    background-color: #b2ffc5;
  }
  .category_list .green{
    background-color: #f9b97b;
  }
  .category_list .gray{
    background-color: #b9b8b8;
  }
</style>