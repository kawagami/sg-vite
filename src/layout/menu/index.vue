<template>
    <!-- <p>{{ menuList }}</p> -->
    <template v-for="(item, index) in menuList" :key="item.path">

        <!-- 沒子路由 -->
        <template v-if="!item.children">
            <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!-- 只有一個子路由 -->
        <template v-if="item.children && item.children.length == 1">
            <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute">
                <el-icon>
                    <component :is="item.children[0].meta.icon"></component>
                </el-icon>
                <template #title>
                    <span>{{ item.children[0].meta.title }}</span>
                </template>
            </el-menu-item>
        </template>

        <!-- 兩個以上的子路由 -->
        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <Menu :menuList="item.children"></Menu>
        </el-sub-menu>

    </template>
</template>

<script setup>
defineProps(['menuList']);
import { useRouter } from 'vue-router';

let $router = useRouter();

const goRoute = (vc) => {
    $router.push(vc.index);
}
</script>
<script>
export default {
    name: 'Menu'
}
</script>

<style scoped lang="scss"></style>