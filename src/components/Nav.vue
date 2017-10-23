<template>
    <div class="db_nav" :class="{active: isActive}">
        <ul>
            <li v-for="item in navItem">
                <router-link :to="item.url">{{item.text}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                navItem:[
                {text:'首页',url:'/home'},
                {text:'分类',url:'/category'},
                {text:'购物',url:'/cart'},
                {text:'我的',url:'/login'},
                ],
                isActive:false
            }
        },
        mounted:function(){
            scroll
        },
        methods:{
            scroll:function(){
                $(window).scroll(function() {
                    if($(this).scrollTop()< '2rem'){
                        $(this).isActive = !$(this).isActive;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .db_nav{
        height: 1.6rem;
        line-height: 1.6rem;
        border-bottom: 2px solid #3ba94d;
        background-color: #fff;
    }
    .db_nav ul {
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        display: -o-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: 100%;
    }
    .db_nav ul li{
        display: inline-block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        vertical-align: middle;
        text-align: center;
    }
    .db_nav ul li a.active{
        color:#3ba94d;
    }
    .db_nav ul li a{
        color: #4a4a4a;
        font-size: 0.6rem;
    }
    .db_nav.fixed{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>

