<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
      name: 'APP'
    }
</script>

<style>
    #app{
        width: 100%;
        height: 100%;
    }
    /*全局覆盖默认的loading样式*/
    .el-loading-mask{
        background: rgba(0,0,0,.5);
    }
</style>
