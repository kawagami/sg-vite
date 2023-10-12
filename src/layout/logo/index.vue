<template>
    <div class="logo">
        <img :src="setting.logo" alt="" />
        <p>{{ setting.title }}</p>
    </div>
</template>

<script setup>
import setting from "../../setting";
</script>
<script>
export default {
    name: "Logo",
};
</script>

<style scoped lang="scss">
.logo {
    width: calc(100% - 20px - 20px); // 扣掉兩邊的 padding
    height: $base-menu-logo-height;
    color: white;
    display: flex;
    align-items: center;
    padding: $base-menu-logo-padding;

    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: $base-logo-title-fontSize;
        margin-left: 10px;
    }
}
</style>