<template>
<div>
  <Content></Content>
  <sidebar></sidebar>
</div>
</template>

<script>
import Content from './main-content/main-content'
import sidebar from '../sidebar-nav';
export default {
  name: "index",
  components: {sidebar, Content}
}
</script>

<style scoped>

</style>