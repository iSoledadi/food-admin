<template>
  <div id="app">
      {{$store.state.globalSettings}}
    <router-view/>
  </div>
</template>
<script>
    export default {
      mounted(){
        //当前组件挂在完成后需要异步请求全局配置数据
        var url=this.$store.state.globalSettings.apiUrl+'/admin/settings';
        this.$axios.get(url).then((res)=>{
          this.$store.commit("setGlobalSettings",res.data);
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
    </script>
<style lang="scss">
  #app{
    color:#303133;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
