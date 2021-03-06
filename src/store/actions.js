// 异步请求
import axios from 'axios'
import vue from 'vue'
import * as types from './mutation-types.js'

export default {
    //搜索列表
    searchList({ commit, state }, value) {
        state.busy = true;
        commit(types.IS_SHOW_LOADING_TIPS,true);
        axios.get('/api/search?text=' + value + '&page='+state.pageNum+'&page_size=16&search_type=market_product')
        .then(function(result) {
            commit(types.IS_SHOW_LOADING_TIPS,false);
            if (result.data.data != "") {
                commit(types.GET_SEARCH_LISTS, result.data.data);
                state.busy = false;
                state.pageNum++
            } else {
                // commit(types.IS_SHOW_LOADED_TIPS,true);
                commit(types.IS_RESULTS, true);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //热门商品
    hotProduct({ commit, state }) {
        axios.get('/static/json/products.json')
        .then(function(result) {
            if (result.data.list != "") {
                commit(types.GET_HOT_PRODUCTS, result.data.list);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //热门店铺
    hotShop({ commit, state }) {
        axios.get('/static/json/hotshops.json')
        .then(function(result) {
            if (result.data.list != "") {
                commit(types.GET_HOT_SHOPS, result.data.list);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //分类列表
    categoryList({ commit, state }, value) {
        state.busy = true;
        commit(types.IS_SHOW_LOADING_TIPS,true);
        axios.get('/api/v2/marketing_category/' + value + '/products?page='+state.pageNum+'&page_size=10')
        .then(function(result) {
            commit(types.IS_SHOW_LOADING_TIPS,false);
            if (result.data.data.products != "") {
                commit(types.GET_SEARCH_LISTS, result.data.data.products);
                state.busy = false;
                state.pageNum++
            }else{
                commit(types.IS_SHOW_LOADED_TIPS,true);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //分类
    category({ commit, state }) {
        axios.get('/static/json/categoryList.json')
        .then(function(result) {
            if (result.data.list != "") {
                commit(types.CATEGORYS, result.data.list);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //注册
    register({ commit, state },value){
        axios({
            method: "post",
            url: "/mobile/register/prepare",
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            params: value
        })
        .then(function(result) {
            console.log(result.message);
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //购物车列表
    cartList({ commit, state },value){
        axios.get('/static/json/cartList.json')
        .then(function(result) {
            if (result.data.data.shops != "") {
                // 为了方便做购物车全选反选，在每条数据下添加一条checked属性值
                //在这里写的目的是因为我写在组件里面老是报错，哎
                $.each(result.data.data.shops,function(index,el){
                    el.checked = false;
                    $.each(el.items,function(i,e){
                        e.checked = false;
                    })
                }),
                commit(types.CART_lISTS, result.data.data.shops)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //订单列表
    orderList({ commit, state }){
        axios.get('/static/json/orderList.json')
        .then(function(result) {
            if (result.data.data.orders != "") {
                commit(types.ORDER_LISTS, result.data.data.orders)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //优惠券列表
    cuponeList({ commit, state }){
        axios.get('/static/json/cuponeList.json')
        .then(function(result) {
            if (result.data.coupons != "") {
                commit(types.CUPONE_LISTS, result.data.coupons)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //地址列表
    addressList({ commit, state }){
        axios.get('/static/json/addressList.json')
        .then(function(result) {
            if (result.data.data != "") {
                commit(types.ADDRESS_LISTS, result.data.data)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //商品详情
    detailInfo({ commit, state }){
        axios.get('/static/json/detail.json')
        .then(function(result) {
            //异步请求没有做类型说明，或者以字符串方式接受，
            //用eval()方法(后端教我的方法)转换为json对象，但是网上说有性能问题
            var obj = eval("("+result.data+")");
            if (obj.data != "") {
                commit(types.DETAIL_INFO, obj.data)
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //商品详情/评论/讨论
    detailtab({ commit, state }){
        axios.get('/static/json/detail_tab.json')
        .then(function(result) {   
            commit(types.DETAIL_TABS,result.data.data)
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //店铺详情
    getShopInfo({ commit, state }){
        axios.get('/static/json/shop.json')
        .then(function(result) {   
            commit(types.SHOP_INFO,result.data.data)
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    }
}
