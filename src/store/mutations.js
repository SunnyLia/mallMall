// 修改vuex中state数据的mutaitions方法
import {
  GET_SEARCH_LISTS,//搜索列表
  IS_RESULTS,//有无搜索数据
  HEADER_HEIGHT,//头部高度
  // CATEGORY_LISTS,//分类列表
  CATEGORYS,//分类
  USERINFO,//用户信息
  IS_LOGIN,//是否登录
  PROVINCES,//省
  CITYS,//市
  DISTRICTS,//区
  CART_lISTS,//购物车列表
  CUPONE_LISTS,//优惠券列表
  ADDRESS_LISTS,//地址列表
  DETAIL_INFO,//商品详情
  DETAIL_TABS,//商品详情/评论/讨论
  IS_FIXED_HEADER,
  IS_SHOW_SEARCH_BAR,
  IS_SHOW_MASK,
  GET_SLIDERS,
  GET_HOT_PRODUCTS,//热门商品
  GET_HOT_SHOPS,//热门店铺
  ORDER_LISTS,//订单列表
  GET_PRODUCTS,
  IS_SHOW_LOADING_TIPS,
  IS_SHOW_LOADED_TIPS
} from './mutation-types.js'
export default{
  [GET_SEARCH_LISTS](state,list){//搜索列表
    state.searchLists = list;
  },
  [IS_RESULTS](state,flag){//有无搜索数据
    state.isResults = flag;
  },
  [HEADER_HEIGHT](state,num){//头部高度
    state.headerHeight = num;
  },
  // [CATEGORY_LISTS](state,list){//分类列表
  //   state.categoryLists = list;
  // },
  [CATEGORYS](state,list){//分类
    state.categorys = list;
  },
   [USERINFO](state,obj){//用户信息
    state.userInfo = obj;
  }, 
  [IS_LOGIN](state,flag){//是否登录
    state.isLogin = flag;
  },
  [PROVINCES](state,list){//省
    state.provinces = list;
  },
  [CITYS](state,list){//市
    state.citys = list;
  },
  [DISTRICTS](state,list){//区
    state.districts = list;
  },
  [CART_lISTS](state,list){//购物车列表
    state.cartLists = list;
  },
  [CUPONE_LISTS](state,list){//优惠券列表
    state.cuponeLists = list;
  },
  [ADDRESS_LISTS](state,list){//地址列表
    state.addressLists = list;
  },
  [DETAIL_INFO](state,list){//商品详情
    state.detailInfos = list;
  },
  [DETAIL_TABS](state,list){//商品详情/评论/讨论
    state.detailTabs = list;
  },
  [IS_FIXED_HEADER](state,flag){
    state.isFixedHeader = flag;
  },
  [IS_SHOW_SEARCH_BAR](state,flag){
    state.isShowSearchBar = flag;
  },
  [IS_SHOW_MASK](state,flag){
    state.isShowMask = flag;
  },
  [GET_SLIDERS](state,list){
    state.sliders = list;
  },
  [GET_HOT_PRODUCTS](state,list){//热门商品
    state.hotProducts = list;
  },
  [GET_HOT_SHOPS](state,list){//热门店铺
    state.hotShops = list;
  },
  [ORDER_LISTS](state,list){//订单列表
    state.orderLists = list;
  },
  [GET_PRODUCTS](state,list){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    state.products = state.products.concat(list);
  },
  [IS_SHOW_LOADING_TIPS](state,flag){
    state.isShowLoadingTips = flag;
  },
  [IS_SHOW_LOADED_TIPS](state,flag){
    state.isShowLoadedTips = flag;
  }
}