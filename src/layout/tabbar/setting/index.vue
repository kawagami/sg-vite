<template>
    <el-button icon="Refresh" size="small" circle />
    <el-button icon="FullScreen" size="small" circle />
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

<script setup></script>

<style scoped lang="scss"></style>