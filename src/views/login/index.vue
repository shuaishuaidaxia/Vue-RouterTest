<template>
<div id="login_wrap">
<h2>登录页</h2>
  <div id="login">
    <div id="login-account">
       <span>账号：</span>
      <input type="text" placeholder="账号"  name="account" v-model="account">
    </div>
    <div id="login-password">
      <span>密码：</span>
      <input type="password" placeholder="密码"  name="account" v-model="password">
    </div>
    <button @click="login">登录</button>
  </div>
</div>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login(){
      //登录请求
    }
  }
}
</script>

<style scoped>

</style>