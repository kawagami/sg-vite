<script setup>
import { Message, Lock } from '@element-plus/icons-vue';
import { onMounted, reactive, ref } from 'vue';
import useUserStore from '../../store/modules/user';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';

let loading = ref(false);

let $route = useRoute();
let $router = useRouter();

let useStore = useUserStore();

let login_form = reactive({
    email: '',
    password: ''
})

// form 是否全部驗證通過的 promise
let login_forms = ref();

const validatorEmail = (rule, value, callback) => {
    // 定义一个电子邮件地址的正则表达式
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // 使用正则表达式的test方法检查字符串是否匹配电子邮件地址的格式
    if (emailRegex.test(value)) {
        callback();
    } else {
        callback(new Error('請輸入 email'));
    }
};

// 定義 form 的驗證規則
const rules = {
    email: [
        // { required: true, message: 'email 不能為空', trigger: 'blur' },
        { validator: validatorEmail, trigger: 'change' },
    ],
    password: [
        { required: true, message: 'password 不能為空', trigger: 'blur' },
    ]
};

const login = async () => {
    // 確認通過 form 驗證
    await login_forms.value.validate();

    // 點擊按鈕後
    // 通知倉庫發登入請求

    loading.value = true;

    try {
        await useStore.userLogin(login_form);

        // 判斷是否有 query redirect
        let redirect = $route.query.redirect;

        $router.push({ path: redirect || '/' });

        ElNotification({
            type: 'success',
            message: '登入成功'
        });

        loading.value = false;
    } catch (error) {
        loading.value = false;

        // ElNotification({
        //     type: 'error',
        //     message: error.response.data.message
        // });
    }
}

// 測試 API 封裝有沒有效
onMounted(() => {
    // request({
    //     url: '/sg-vite',
    //     method: 'get'
    // })

    // console.log('123');
});
</script>

<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="4"></el-col>
            <el-col :span="12" :xs="20">
                <el-form class="login_form" :model="login_form" :rules="rules" ref="login_forms">

                    <h1>大標題</h1>
                    <h2>副標題</h2>
                    <el-form-item prop="email">
                        <el-input :prefix-icon="Message" v-model="login_form.email"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input :prefix-icon="Lock" type="password" v-model="login_form.password"
                            show-password></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
                            登入
                        </el-button>
                    </el-form-item>

                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('../../assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('../../assets/images/login_form.png') no-repeat;
        background-size: cover;

        .login_btn {
            width: 100%;
        }
    }
}
</style>
