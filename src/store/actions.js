// 异步请求
import axios from 'axios'
import vue from 'vue'
import * as types from './mutation-types.js'

export default {
    //搜索列表
    searchList({ commit, state }, value) {
        axios.get('/api/search?text=' + value + '&page=1&page_size=16&search_type=market_product')
        .then(function(result) {
            if (result.data.data != "") {
                commit(types.GET_SEARCH_LISTS, result.data.data);
            } else {
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
        axios.get('/api/home/shops?page=1&page_size=10')
        .then(function(result) {
            if (result.data.data.shops != "") {
                commit(types.GET_HOT_SHOPS, result.data.data.shops);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //分类列表
    categoryList({ commit, state }, value) {
        axios.get('/api/v2/marketing_category/' + value + '/products?page=1&page_size=10')
        .then(function(result) {
            if (result.data.data.products != "") {
                commit(types.GET_SEARCH_LISTS, result.data.data.products);
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
    // 获取省份
    province({ commit, state }) {
        axios.get('/api/zoning')
        .then(function(result) {
            if (result.data.data != "") {
                commit(types.PROVINCES, result.data.data);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    // 获取市
    city({ commit, state },value) {
        axios.get('/api/zoning?id='+value)
        .then(function(result) {
            if (result.data.data != "") {
                commit(types.CITYS, result.data.data);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    },
    //购物车列表
    cartList({ commit, state },value){
        axios.get('/static/json/cartList.json')
        .then(function(result) {
            if (result.data.data != "") {
                commit(types.CART_lISTS, result.data.data);
            }
        })
        .catch(function(result) {
            console.log('请求错误了')
        })
    }

}
