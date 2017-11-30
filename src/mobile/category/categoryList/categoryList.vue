<template>
  <div class="db_list">
    <list-header></list-header>
    <list-nav></list-nav>
    <screen-nav></screen-nav>
    <List></List>
  </div>
</template>
<script type="text/javascript">
  import ListHeader from './listHeader/listHeader.vue'
  import ListNav from './listNav/listNav.vue'
  import ScreenNav from '@/components/screenNav/screenNav.vue'
  import List from '@/mobile/search/searchList/searchList.vue'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      var val = this.$route.params.id;
      this.$store.dispatch('categoryList',val);
      this.$store.dispatch('category');
    },
    components: {
      ListHeader,
      ListNav,
      ScreenNav,
      List
    }
  }
</script>
<style scoped>

</style>
