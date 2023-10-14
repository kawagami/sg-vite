<template>
    <h1>
        home
    </h1>
</template>

<script setup>
import { onMounted } from 'vue';
import useUserStore from '../../store/modules/user';
let userStore = useUserStore();

onMounted(() => {
    userStore.userInfo();
});

</script>

<style scoped></style>
