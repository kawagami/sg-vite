<template>
    <!-- icon -->
    <el-icon style="margin-right: 10px" @click="changeIcon">
        <component
            :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"
        ></component>
    </el-icon>
    <!-- 麵包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>one</el-breadcrumb-item>
        <el-breadcrumb-item>two</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ref } from "vue";
import useLayOutSettingStore from "../../../store/modules/setting";

let LayOutSettingStore = useLayOutSettingStore();

const changeIcon = () => {
    LayOutSettingStore.fold = !LayOutSettingStore.fold;
};
</script>
<script>
export default {
    name: "Breadcrumb",
};
</script>

<style scoped lang="scss"></style>