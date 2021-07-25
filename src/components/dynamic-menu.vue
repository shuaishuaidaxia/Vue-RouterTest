<template>
  <div>
<a-layout id="components-layout-demo-custom-trigger">
<a-layout-sider v-model="collapsed" :trigger="null" collapsible>
  <div class="logo" />
  <a-menu @click="gotoRoute"
          style="width: 256px"
          v-model="currentSelectChild"
          @openChange="onOpenChange"
          :openKeys="currentParent"
          theme="dark"
          mode="inline">
    <!--横向：horizontal-->
    <!--有openKeys时 :defaultOpenKeys="[200]"无效 -->
    <!--有v-model时 :ddefaultSelectedKeys="[202]"无效 -->
    <a-sub-menu v-for="itParent in sidebarMenu" :key="itParent.name">
                <span slot="title">
                    <span>{{itParent.name}}</span>
                </span>
      <template v-if="itParent.children && itParent.children >=1">
        <a-menu-item v-for="chil in itParent.children" :key="chil.name">
          <router-link :to="chil.path"><!--根据路径去跳转页面-->
            {{chil.name}}
          </router-link>
        </a-menu-item>
      </template>
    </a-sub-menu>
  </a-menu>
</a-layout-sider>
</a-layout>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "dynamic-menu",
  data () {
    return {
      isCollapsed: true,
      currentSelectChild:'',
      currentParent:''
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