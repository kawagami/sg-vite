import axios from "axios";
import { ElMessage } from "element-plus";
import useUserStore from "../store/modules/user";

let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
});

// 請求攔截
request.interceptors.request.use((config) => {
    let userStore = useUserStore();
    if (userStore.token) {
        config.headers.set('Authorization', `Bearer ${userStore.token}`);
    }

    // 可在這裡控制 headers

    return config;
})

// 回應攔截
request.interceptors.response.use(
    // 成功
    (response) => {
        // return response.data;
        return response;
    },

    // 失敗
    (error) => {
        let message = '';

        let status = error.response.status;
        switch (status) {
            case 400:
                message = '400 錯誤';
                break;
            case 401:
                // message = '帳密錯誤';
                message = error.response.data.message;
                break;
            default:
                // message = '未分類錯誤';
                message = error.response.data.message;
                break;
        }

        // 提示錯誤訊息
        ElMessage({
            type: 'error',
            message
        })

        return Promise.reject(error);
    },
);

export default request;