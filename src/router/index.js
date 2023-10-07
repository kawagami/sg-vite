import { createRouter, createWebHashHistory } from "vue-router";
import { ConstantRoute } from "./routers";
let router = createRouter({
    history: createWebHashHistory(),
    routes: ConstantRoute
});

export default router;