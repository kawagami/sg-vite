<template>
    <!-- icon -->
    <el-icon style="margin-right: 10px" @click="changeIcon">
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 麵包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import useLayOutSettingStore from "../../../store/modules/setting";

let $route = useRoute();

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