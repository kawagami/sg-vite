<script setup>
import Logo from './logo/index.vue';
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
                <el-menu background-color="#00152" text-color="white">
                    <el-menu-item index="1">首頁</el-menu-item>
                    <el-menu-item index="2">數據</el-menu-item>

                    <!-- collapse menu -->
                    <el-sub-menu index="3">
                        <template #title>權限管理</template>
                        <el-menu-item index="3-1">user 管理</el-menu-item>
                        <el-menu-item index="3-2">role 管理</el-menu-item>
                        <el-menu-item index="3-3">menu 管理</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <!-- 頂部 navigation -->
        <div class="layout_tabbar">456</div>

        <!-- 內容 -->
        <div class="layout_main">
            <p style="height: 20000px; background-color: blue;"></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background: red;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-color;
        // color: white;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height - ($base-menu-logo-padding * 2));
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        background: cyan;
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
