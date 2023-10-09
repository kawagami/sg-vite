import { defineStore } from "pinia";
import { reqLogin } from "../../api/user";

let useUserStore = defineStore('User', {
    state: () => {
        return {
            token: localStorage.getItem("sgtoken")
        };
    },
    actions: {
        async userLogin(data) {
            let result = await reqLogin(data);

            // console.log(result);
            if (result.status == 200) {
                this.token = result.data.data.token;

                localStorage.setItem("sgtoken", result.data.data.token);

                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        }
    },
    getters: {}
});

export default useUserStore;