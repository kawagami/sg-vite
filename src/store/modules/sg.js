import { defineStore } from "pinia";
import { reqBlogInfo, reqBlogStore, reqTest } from "../../api/sg";

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
        async addArticle(data) {
            let result = await reqBlogStore(data);

            if (result.status == 201) {

                return result;
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
    },
    getters: {}
});

export default useSgStore;