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
import {login,} from "../../api";

export default {
  name: "index",
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async login(){
      //登录请求
      let data = await login(this.account)
      let token = data.token
      this.$store.commit('LOGIN_IN',token)
      console.log(localStorage.getItem('token'),'locat-token')
       this.$router.push('/home')
      console.log(token)
    }
  }
}
</script>

<style scoped>

</style>