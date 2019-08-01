<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path">
        <!-- routes是一个数据对象，给组件传数据用的 -->
        <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SidebarItem from './SidebarItem/SidebarItem';
    export default {
      components: { SidebarItem },
      computed: {
        ...mapGetters([
          // 映射 this.permission_routers 为 store.getters.permission_routers
          'permission_routers'
        ])
      },
      mounted() {
        // console.log('$route-------' + this.$route);
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu {
        min-height: 100%;
    }
</style>
