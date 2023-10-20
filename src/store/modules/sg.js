import { defineStore } from "pinia";
import { reqBlogInfo, reqBlogStore } from "../../api/sg";

let useSgStore = defineStore('Sg', {
    state: () => {
        return {
        };
    },
    actions: {
        async getArticles() {
            let result = await reqBlogInfo();

            // console.log(result);
            if (result.status == 200) {

                return result;
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
    },
    getters: {}
});

export default useSgStore;