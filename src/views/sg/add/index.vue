<template>
    <el-form :model="form" label-width="120px">

        <el-form-item label="標題">
            <el-input v-model="form.name" :rows="2" type="input" placeholder="Please input" />
        </el-form-item>

        <el-form-item label="介紹文字">
            <el-input v-model="form.short_content" :rows="2" type="input" placeholder="Please input" />
        </el-form-item>

        <template v-for="(item, index) in form.components" :key="index">
            <el-form-item label="文字">
                <el-input v-model="item.article" :rows="2" type="textarea" placeholder="Please input" />
            </el-form-item>

            <el-form-item label="圖片">
                <el-upload list-type="picture" v-model:file-list="item.raw_image" class="upload-demo" :action="ACTION"
                    :headers="headers" :limit="1" :on-preview="handlePictureCardPreview" :on-exceed="handleExceed"
                    :on-change="handleChange" :before-upload="handleBeforeUpload" :on-success="handleUploadSuccess">
                    <template #trigger>
                        <el-button type="primary">select file</el-button>
                    </template>
                    <!-- <el-button class="ml-3" type="success" @click="submitUpload(item.index)">
                        upload to server
                    </el-button> -->
                    <template #tip>
                        <div class="el-upload__tip text-red">
                            limit 1 file, new file will cover the old file
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
        </template>

        <el-form-item>
            <el-button @click="addComponent">增加段落</el-button>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>




    <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" style="width: 100%;" />
    </el-dialog>
</template>
  

<script setup>
import { ref, reactive } from 'vue'
import { genFileId } from 'element-plus'
import useUserStore from '../../../store/modules/user';
import useSgStore from '../../../store/modules/sg';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';

// 實體化 useSgStore
const $router = useRouter();

// 實體化 useSgStore
const sgStore = useSgStore();

// do not use same name with ref
const form = reactive({
    name: '',
    short_content: '',
    components: [
        {
            index: 1,
            article: '',
            raw_image: ref([]),
            image: {},
        },
    ],
})

// form summit
const onSubmit = async () => {
    // 整理成 server 接受的格式
    form.components.forEach(component => {
        if (component.raw_image[0] && component.raw_image[0].response) {
            // https://juejin.cn/post/7026620645207179272
            // 不用解構會不觸發 vue 的響應式系統，因為本來的值是引用的，導致不會實際改值
            component.image = { ...component.raw_image[0].response };
        }
    });

    try {
        await sgStore.addArticle(form);

        // 前面有設定 201 才會執行後面的 code
        $router.push('/sg/article');

        ElNotification({
            type: 'success',
            message: '新增成功'
        });

    } catch (error) {
        console.log('error');
    }

}

// 檔案
const upload = ref()

// token & API url
const userStore = useUserStore();
const headers = ref({ 'Accept': 'application/json', 'Authorization': `Bearer ${userStore.token}` })
const API_URL = import.meta.env.VITE_APP_BASE_API;
const ACTION = `${API_URL}/image`;

// 選第二張圖時
const handleExceed = (files) => {
    console.log("選第二張圖時");
    console.log(files);
    // upload.value.clearFiles()
    // const file = files[0]
    // file.uid = genFileId()
    // upload.value.handleStart(file)
}

// 有變更時
const handleChange = (file) => {
    // console.log("handleChange");
    // console.log(file);
    // console.log(form);
};

// 上傳前
const handleBeforeUpload = (file) => {
    // console.log('handleBeforeUpload');
    // console.log(file);
};

// 實際上傳動作
const submitUpload = (index) => {

    // console.log(index);
    // console.log(form);
    // self.submit()
    // image.value.submit()
    // console.log(file.value);
    // file.value.submit()
    // console.log(upload);
    // upload.value.submit()
}

// 上傳成功後
const handleUploadSuccess = (
    response,
    uploadFile
) => {
    // console.log("上傳成功後");
    // console.log(response);
    // console.log(uploadFile);
    // upload.value = URL.createObjectURL(uploadFile.raw)
    // upload.value = response.url;
    // form.image = response.url;
    uploadFile.url = response.url;
}

// 圖片預覽
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}

// 增加段落
const addComponent = () => {
    form.components.push({
        index: Date.now(),
        article: '',
        raw_image: ref([]),
        image: {},
    });
};
</script>

<style scoped lang="scss"></style>