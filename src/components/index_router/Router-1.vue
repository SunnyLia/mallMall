<template>
    <div class="router_1">
        <div class="components">
            <h1>{{text}}</h1>
            <router-link :to="{'name':'Zhangsan'}">嵌套路由1&nbsp;&nbsp;&nbsp;</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                text:'this is router-1111111111111'
            }
        },
        mounted:function(){

        },
        methods:{

        }
    }
</script>
<style scoped>
    .router_1{
        width:100%;
        margin-top:10px;
    }
    .components{
        background:orange;
        border:5px solid #333;
    }
</style>