<template>
    <div class="db_header" id="abcd">
        <!-- 内容区域 -->
        <div class="db_header_main">
            <!-- logo和搜索icon -->
            <div class="db_logo_box" v-show="!isSearch">
                <div class="db_logo_text">
                    <router-link :to="{path:'/home'}">市集</router-link>
                </div>
                <div class="db_search_icon" @click="onSearch"><i class="fa fa-search"></i></div>
            </div>
            <!-- 搜索块 -->
            <div class="db_search_box" v-show="isSearch">
                <input type="text" name="content" class="ipt_search" @keyup="checkInfo($event)">
                <span class="btn_search" @click="onSubmit"><i class="fa fa-search"></i></span>
            </div>
        </div>
        <!-- mask遮罩层 -->
        <div class="db_mask" v-show="isSearch" v-on:click="onSearch"></div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                isSearch:false
            }
        },
        mounted:function(){
            var height = $('.db_header').height();
            this.$store.state.headerHeight = height;
        },
        methods:{
            onSearch:function(){
                this.isSearch=!this.isSearch
            },
            onSubmit:function(){
                window.location.reload();//先要刷新页面，因为在搜索页面点击搜索按钮时，路由跳了，内容会没反应
                var val = $('.ipt_search').val();
                this.$router.push({'path':'/search',query:{val:val}});
            },
            checkInfo:function(event){
                console.log('搜索被点击了')
                if (event.keyCode == 13) {
                    window.location.reload();//先要刷新页面，因为在搜索页面点击搜索按钮时，路由跳了，内容会没反应
                    var val = $('.ipt_search').val();
                    this.$router.push({'path':'/search',query:{val:val}});
                }
            }
        }
    }
</script>
<style scoped>
    .db_header .db_header_main{
        position: relative;
        z-index: 110;
        overflow: hidden;
        background-color: #0aa082;
    }
    /* logo盒子css */
    .db_header .db_logo_box{
        height: 2rem;
        line-height: 2rem;
    }
    .db_header .db_logo_text a,.db_logo_text{
        display: inline-block;
        color: #fff;
        font-size: .8rem;
        font-weight: 600;
        margin: 0 .5rem;
    }
    .db_header .db_search_icon{
        float: right;
        padding: 0 0.8rem;
        cursor: pointer;
    }
    .db_header .db_search_icon i{
        color: #fff;
        font-size: 0.8rem;
    }
    /* search盒子css */
    .db_header .db_search_box{
        position: relative;
        height: 1.2rem;
        margin:0.4rem 1.2rem;
        padding: 0 0.8rem;
        border: 1px solid #fff;
        border-radius: 1.2rem;
    }
    .db_header .ipt_search{
        width: 100%;
        line-height: 1.2rem;
        border: none;
        color: #fff;
        background-color: transparent;
    }
    .db_header .btn_search{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        display: block;
        line-height: 1.2rem;
        padding: 0 0.6rem;
        color: #fff;
        font-size: .6rem;
    }
    .db_header .db_mask{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
</style>

