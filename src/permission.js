import router from "./router";
import setting from "./setting";
import pinia from "./store";
import useUserStore from "./store/modules/user";

let userStore = useUserStore(pinia);

router.beforeEach(async (to, from, next) => {
    document.title = `${setting.documentTitle} - ${to.meta.title}`;

    let token = userStore.token;
    let email = userStore.email;
    if (token) {
        if (to.path == '/login') {
            next({ path: '/' });
        } else {
            if (email) {
                next();
            } else {
                // 沒有 email 資料的話發 request 取得後再放行
                try {
                    await userStore.userInfo();
                    next();
                } catch (error) {
                    // token 過期，不到 user info
                    userStore.userLogout();
                    next({ path: '/login', query: { redirect: to.path } });
                }
            }
        }
    } else {
        if (to.path == '/login') {
            next();
        } else {
            next({ path: '/login', query: { redirect: to.path } });
        }
    }
});

router.afterEach((to, from) => {

});