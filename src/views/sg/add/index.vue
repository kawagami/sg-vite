<template>
    <el-input v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />

    <el-upload list-type="picture-card" ref="upload" class="upload-demo" :action="ACTION" :headers="headers" :limit="1"
        :on-preview="handlePictureCardPreview" :on-exceed="handleExceed" :auto-upload="false">
        <template #trigger>
            <el-button type="primary">select file</el-button>
        </template>
        <el-button class="ml-3" type="success" @click="submitUpload">
            upload to server
        </el-button>
        <template #tip>
            <div class="el-upload__tip text-red">
                limit 1 file, new file will cover the old file
            </div>
        </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" style="width: 100%;" />
    </el-dialog>
</template>
  

<script setup>
import { ref } from 'vue'
import { genFileId } from 'element-plus'
import useUserStore from '../../../store/modules/user';

const textarea = ref('')

const upload = ref()

const userStore = useUserStore();
const headers = ref({ 'Accept': 'application/json', 'Authorization': `Bearer ${userStore.token}` })
const API_URL = import.meta.env.VITE_APP_BASE_API;
const ACTION = `${API_URL}/image`;

const handleExceed = (files) => {
    upload.value.clearFiles()
    const file = files[0]
    file.uid = genFileId()
    upload.value.handleStart(file)
}

const submitUpload = () => {
    upload.value.submit()
}

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}
</script>

<style scoped lang="scss"></style>