export const ConstantRoute = [
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        name: 'layout',
        meta: {
            title: 'layout',
            hidden: false,
            icon: 'Grid',
        },
        children: [
            {
                path: '/home',
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: '首頁',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },
            {
                path: '/test',
                component: () => import('../views/home/index.vue'),
                meta: {
                    title: '測試',
                    hidden: false,
                    icon: 'QuestionFilled',
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
            hidden: true,
            icon: 'CloseBold',
        },
    },
    {
        path: '/login',
        component: () => import('../views/login/index.vue'),
        name: 'login',
        meta: {
            title: '登入',
            hidden: true,
            icon: 'Promotion',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta: {
            title: '任意路徑',
            hidden: true,
            icon: 'MoreFilled',
        },
    },
]