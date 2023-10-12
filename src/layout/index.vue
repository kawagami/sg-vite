<script setup>
import { useRoute } from "vue-router";
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import Main from "./main/index.vue";
import Tabbar from "./tabbar/index.vue";
import useUserStore from "../store/modules/user";
import useLayOutSettingStore from "../store/modules/setting";

let userStore = useUserStore();

let $route = useRoute();

let LayOutSettingStore = useLayOutSettingStore();
</script>
<script>
export default {
    name: "Layout",
};
</script>

<template>
    <div class="layout_container">
        <!-- 左側 sidebar -->
        <div
            class="layout_slider"
            :class="{ fold: LayOutSettingStore.fold ? true : false }"
        >
            <Logo></Logo>

            <!-- menu -->

            <!-- 滾動組件 -->
            <el-scrollbar class="scrollbar">
                <!-- menu 組件 -->
                <el-menu
                    :default-active="$route.path"
                    background-color="#001529"
                    text-color="white"
                    :collapse="LayOutSettingStore.fold ? true : false"
                >
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>

        <!-- 頂部 navigation -->
        <div
            class="layout_tabbar"
            :class="{ fold: LayOutSettingStore.fold ? true : false }"
        >
            <Tabbar></Tabbar>
        </div>

        <!-- 內容 -->
        <div
            class="layout_main"
            :class="{ fold: LayOutSettingStore.fold ? true : false }"
        >
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
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(
                100vh - $base-menu-logo-height - ($base-menu-logo-padding * 2)
            );

            .el-menu {
                border-right: none;
            }
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
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
        transition: all 0.3s;

        &.fold {
            width: calc(100% - ($base-main-padding * 2) - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>
