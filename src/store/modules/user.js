import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "../../api/user";
// 引入 routes
import { ConstantRoute } from "../../router/routers";
// token
import { SET_TOKEN, GET_TOKEN } from "../../utils/token";

let useUserStore = defineStore('User', {
    state: () => {
        return {
            token: GET_TOKEN("sgtoken"),
            menuRoutes: ConstantRoute,
            email: '',
        };
    },
    actions: {
        async userLogin(data) {
            let result = await reqLogin(data);

            // console.log(result);
            if (result.status == 200) {
                this.token = result.data.data.token;

                // localStorage.setItem("sgtoken", result.data.data.token);
                SET_TOKEN("sgtoken", result.data.data.token);

                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
        async userInfo() {
            let result = await reqUserInfo();
            if (result.status == 200) {
                this.email = result.data.data[0].email;
            }
        },
    },
    getters: {}
});

export default useUserStore;