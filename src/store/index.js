// 组装模块并导出store的文件
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)
const state = {
  searchLists:[],//搜索列表
  isResults:false,//有无搜索数据
  headerHeight:0,//头部高度
  // categoryLists:[],//分类列表
  categorys:[],//分类
  userInfo:{},//用户信息
  isLogin:false,//是否登录
  provinces:[],//省PROVINCES
  citys:[],//市CITYS
  districts:[],//区DISTRICTS
  cartLists:[],//购物车列表
  isFixedHeader: false,
  isShowSearchBar: false,
  isShowMask: false,
  sliders: [],
  hotProducts: [],//热门商品
  hotShops: [],//热门店铺
  products:[],
  num: 5,
  busy: false,
  isShowLoadingTips: false,
  isShowLoadedTips: false
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})