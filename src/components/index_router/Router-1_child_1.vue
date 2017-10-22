<template>
    <div class="router_1">
        <div class="components">
            <h1>{{text}}</h1>
            <div>
                <ul>
                    <li v-for="(value,index) in temparr">{{value}}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(value,index) in tempobj">
                        <div v-for="(innervalue,innerindex) in value.list">{{innervalue}}</div>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(value,index) in tempxxx">
                        {{value.userId}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                text:'router-1的嵌套路由',
                temparr:[0,1],
                tempxxx:[{
                    userId:1203,
                    temp:65475
                },{
                    userId:123,
                    temp:65475
                }],
                tempobj:{
                    name:123,
                    year:5757,
                    list:['1203',4124,15]
                }
            }
        },
        mounted:function(){
            this.init();
        },
        methods:{
            init:function(){
                this.$http.get(url,data,function(res){
                    console.log(res);
                    this.temparr = res.response.fanslkdn
                },function(err){

                })
            }
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