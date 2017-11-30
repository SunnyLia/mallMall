<template>
    <div class="header">
        <div class="components">
            {{text}}
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                text:'this is footer'
            }
        },
        mounted:function(){

        },
        methods:{

        }
    }
</script>
<style scoped>
    .header{
        width:100%;
        height:200px;
        background:#666;
        border:5px solid #blue;
        margin-top:10px;
    }
    .components{
        background:hotpink;
    }
</style>

