import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponent = {};

export default {
    install(app) {
        Object.keys(allGlobalComponent).forEach(key => {
            app.component(key, allGlobalComponent[key]);
        });
        // 全局註冊 element-plus 的 icon
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}