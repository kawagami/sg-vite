import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "../../api/user";
import { reqImages } from "../../api/user";
// 引入 routes
import { ConstantRoute } from "../../router/routers";
// token
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "../../utils/token";

let useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN("TOKEN"),
            menuRoutes: ConstantRoute,
            email: '',
        };
    },
    actions: {
        async userLogin(data) {
            let result = await reqLogin(data);

            if (result.status == 200) {
                this.token = result.data.token;

                SET_TOKEN("TOKEN", result.data.token);

                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
        async userInfo() {
            let result = await reqUserInfo();
            if (result.status == 200) {
                this.email = result.data.email;
                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
        userLogout() {
            // 通知 server remove token
            this.token = ''
            this.email = ''
            REMOVE_TOKEN("TOKEN");
        },
        async getImages() {
            let result = await reqImages();

            if (result.status == 200) {
                return result.data;
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
    },
    getters: {}
});

export default useUserStore;