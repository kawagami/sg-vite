export const ConstantRoute = [
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        name: 'layout',
        meta: {
            title: 'layout',
            hidden: false
        },
        children: [
            {
                path: '/home',
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: '首頁',
                    hidden: false
                },
            },
            {
                path: '/test',
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: '測試',
                    hidden: false
                },
            }
        ]
    },
    {
        path: '/404',
        component: () => import('../views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true
        },
    },
    {
        path: '/login',
        component: () => import('../views/login/index.vue'),
        name: 'login',
        meta: {
            title: '登入',
            hidden: true
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta: {
            title: '任意路徑',
            hidden: true
        },
    },
]