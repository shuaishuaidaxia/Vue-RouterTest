<template>
  <DynamicMenu></DynamicMenu>
</template>

<script>
import {mapState} from 'vuex'
import DynamicMenu from "../../components/dynamic-menu";
 export default {
  name: "sidebar-nav",
   components: {DynamicMenu},
   data () {
    return {
    }
   },
   computed: {
    ...mapState(['sidebarMenu','currentMenu','isSidebarNavCollapse'])
   },
   methods:{
     onOpenChange(){

     },
     gotoRoute(){

     }
   }
}
</script>

<style scoped>

</style>