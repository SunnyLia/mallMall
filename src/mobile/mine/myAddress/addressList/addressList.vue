<template>
  <div class="addressList">
    <ul>
      <li v-for="address in addressLists">
        <div class="listTop clearfix">
          <div class="fl">收货人：<span>{{address.user_name}}</span></div>
          <div class="fr">{{address.phone}}</div>
        </div>
        <div class="listBot">
          <p>{{address.province_name}} {{address.city_name}} {{address.district_name}}</p>
          <div class="buttons clearfix">
            <div class="fl">
              <span class="modifyAdd">修改地址</span>
              <span class="deleteAdd">删除</span>
            </div>
            <div class="fr">
              <span class="default" v-if="address.is_default">默认</span>
              <span class="defaultAdd" v-else>设为默认</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    data() {
      return {      
      }
    },
    computed: mapState(['addressLists']),  
    methods: {
    }
  }
</script>
<style scoped>
  .addressList li{
    width: 100%;
    height: auto;
    border: 1px solid #e4e4e4;
    margin-bottom: 0.5rem;
    padding: 0 0.7rem;
    font-size: 0.5rem;
  }
  .addressList li .listTop{
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .addressList li .listBot{
    padding: 0.5rem 0 0.4rem;
  }
  .addressList li .listBot p{
    line-height: 0.7rem;
  }
  .addressList li .listBot .buttons{
    line-height: 0.8rem;
    height: 0.8rem;
    margin-top: 0.2rem;
  }
  .addressList li .listBot .buttons span{
    color: #f17164;
    padding: 0.2rem 0;
    margin-right: 0.6rem;
  }
  .addressList li .listBot .buttons .defaultAdd{
    margin-right: 0;
  }
  .default{
    margin-right: 0!important;
    color: #fff!important;
    background-color: #f17164;
    text-align: center;
    width:1.8rem;
    display: inline-block;
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0.08rem 0!important;
  }
</style>