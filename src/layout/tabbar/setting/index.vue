<template>
    <el-button icon="Refresh" size="small" circle @click="updateRefresh" />
    <el-button icon="FullScreen" size="small" circle @click="fullScreen" />
    <el-button icon="Setting" size="small" circle />

    <img src="../../../../public/logo.png" style="height: 24px; widows: 24px; margin: 0 10px;">

    <el-dropdown>
        <span class="el-dropdown-link">
            Dropdown List
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>登出</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
import useLayOutSettingStore from '../../../store/modules/setting';

let layOutSettingStore = useLayOutSettingStore();

const updateRefresh = () => {
    layOutSettingStore.refresh = !layOutSettingStore.refresh;
};

const fullScreen = () => {
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};
</script>
<script>
export default {
    name: "Setting",
};
</script>

<style scoped lang="scss"></style>