// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

// import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// const routes = [{
//     path: "/",
//     name: "Home",
//     component: Home
// },
// {
//     path: "/about",
//     name: "About",
//     component: About
// },]
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: routes
// })



createApp(App).use(router).mount('#app')