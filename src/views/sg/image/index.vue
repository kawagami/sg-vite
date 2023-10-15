<template>
    <el-upload v-model:file-list="fileList" :action="ACTION" list-type="picture-card" :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove" :headers="headers" :before-upload="beforeUpload" drag multiple>
        <el-icon>
            <Plus />
        </el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" style="width: 100%;" />
    </el-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import useUserStore from '../../../store/modules/user';

const API_URL = import.meta.env.VITE_APP_BASE_API;

const ACTION = `${API_URL}/image`;

const userStore = useUserStore();

const fileList = ref([
    // {
    //     name: 'food.jpeg',
    //     url: 'https://i.imgur.com/hlkWrJn.png',
    // },
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const uploadData = ref({ image: null })
const headers = ref({ 'Accept': 'application/json', 'Authorization': `Bearer ${userStore.token}` })

const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}

const beforeUpload = (rawFile) => {
    if (rawFile.size / 1024 / 1024 > 10) {
        ElMessage.error('圖片大小不能超過 10MB!')
        return false
    }
    uploadData.value = { image: rawFile };
    return true;
};

onMounted(() => {
    let response = userStore.getImages();
    response
        .then((result) => {
            // console.log(result);
            fileList.value = result;
        })
        .catch((error) => {
            console.log(error);
        });
});
</script>

<style scoped lang="scss"></style>