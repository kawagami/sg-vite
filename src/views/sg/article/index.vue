<template>
    <el-table :data="articles" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="short_content" label="ShortContent" />
    </el-table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useSgStore from "../../../store/modules/sg";

const sgStore = useSgStore();

const articles = ref([]);

onMounted(async () => {
    try {
        let datas = await sgStore.getArticles();
        articles.value = datas.data.data;
        console.log(articles.value);
    } catch (error) {}
});
</script>

<style scoped lang="scss"></style>