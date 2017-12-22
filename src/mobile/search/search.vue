<template>
    <div class="db_search">
        <headers></headers>
        <screen-nav v-show="!isResults"></screen-nav>
        <no-results v-show="isResults"></no-results>
        <search-list v-infinite-scroll="getData" infinite-scroll-disabled="busy" infinite-scroll-distance="10"></search-list>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import Headers from '@/components/header/Header.vue'
    import screenNav from '@/components/screenNav/screenNav.vue'
    import NoResults from '@/mobile/search/searchList/noResults.vue'
    import SearchList from '@/mobile/search/searchList/searchList.vue'
    export default{
        data() {
            return {
            }
        },
        computed: mapState(['isResults']),
        methods:{
            getData(){
                var val = this.$route.query.val;
                this.$store.dispatch('searchList',val);
            }
        },
        components: {
            Headers,
            screenNav,
            NoResults,
            SearchList
        }
    }
</script>
<style scoped>

</style>

