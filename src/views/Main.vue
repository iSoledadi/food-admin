<template>
    <div class="main">
      <h1>main组件</h1>
      欢迎回来：
      {{$store.state.adminName}}
      <div>左侧的导航栏</div>
      <div>上方的提示栏</div>
      <div>
        <h3>下方的提示栏</h3>
        <router-view></router-view>
      </div>
    </div>
  </template>
  <script>
  export default {
    beforeCreate () {
      //组件创建之前先要检查是否已经登录为管理员
      if(!this.$store.state.adminName){
        this.$router.push('/login');//未登录
      }
    }
  }
  </script>
  <style>
    
  </style>
  