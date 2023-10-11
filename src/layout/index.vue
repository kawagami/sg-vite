<script setup>
import { useRoute } from 'vue-router';
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue';
import useUserStore from '../store/modules/user';

let userStore = useUserStore();

let $route = useRoute();
</script>

<template>
    <div class="layout_container">
        <!-- 左側 sidebar -->
        <div class="layout_slider">
            <Logo></Logo>

            <!-- menu -->

            <!-- 滾動組件 -->
            <el-scrollbar class="scrollbar">
                <!-- menu 組件 -->
                <el-menu :default-active="$route.path" background-color="#001529" text-color="white">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <!-- 頂部 navigation -->
        <div class="layout_tabbar">
            <Tabbar></Tabbar>
        </div>

        <!-- 內容 -->
        <div class="layout_main">
            <Main></Main>
        </div>
    </div>
</template>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    // background: white;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-color;
        color: white;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height - ($base-menu-logo-padding * 2));

            .el-menu {
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0;
        left: $base-menu-width;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width - ($base-main-padding * 2));
        height: calc(100vh - $base-tabbar-height - ($base-main-padding * 2));
        background: yellowgreen;
        top: $base-tabbar-height;
        left: $base-menu-width;
        padding: $base-main-padding;
        overflow: auto;
    }
}
</style>
