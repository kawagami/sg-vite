export const ConstantRoute = [
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        name: 'layout',
        meta: {
            title: '',
            hidden: false,
            icon: '',
        },
        redirect: '/home',
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
        path: '/screen',
        component: () => import('../views/screen/index.vue'),
        name: 'screen',
        meta: {
            title: '數據',
            hidden: false,
            icon: 'Histogram',
        },
    },
    {
        path: '/acl',
        component: () => import('../layout/index.vue'),
        name: 'acl',
        meta: {
            title: '權限管理',
            hidden: false,
            icon: 'Lock',
        },
        redirect: '/acl/user',
        children: [
            {
                path: '/acl/user',
                component: () => import('../views/acl/user/index.vue'),
                name: 'user',
                meta: {
                    title: 'user 管理',
                    hidden: false,
                    icon: 'User',
                },
            },
            {
                path: '/acl/role',
                component: () => import('../views/acl/role/index.vue'),
                name: 'role',
                meta: {
                    title: 'role 管理',
                    hidden: false,
                    icon: 'UserFilled',
                },
            },
            {
                path: '/acl/permission',
                component: () => import('../views/acl/permission/index.vue'),
                name: 'permission',
                meta: {
                    title: 'permission 管理',
                    hidden: false,
                    icon: 'Monitor',
                },
            },
        ],
    },
    {
        path: '/product',
        component: () => import('../layout/index.vue'),
        name: 'product',
        meta: {
            title: '產品管理',
            hidden: false,
            icon: 'Goods',
        },
        redirect: '/product/attr',
        children: [
            {
                path: '/product/attr',
                component: () => import('../views/product/attr/index.vue'),
                name: 'attr',
                meta: {
                    title: 'attr 管理',
                    hidden: false,
                    icon: 'User',
                },
            },
            {
                path: '/product/sku',
                component: () => import('../views/product/sku/index.vue'),
                name: 'sku',
                meta: {
                    title: 'sku 管理',
                    hidden: false,
                    icon: 'UserFilled',
                },
            },
            {
                path: '/product/spu',
                component: () => import('../views/product/spu/index.vue'),
                name: 'spu',
                meta: {
                    title: 'spu 管理',
                    hidden: false,
                    icon: 'Monitor',
                },
            },
            {
                path: '/product/trademark',
                component: () => import('../views/product/trademark/index.vue'),
                name: 'trademark',
                meta: {
                    title: 'trademark 管理',
                    hidden: false,
                    icon: 'ShoppingCartFull',
                },
            },
        ],
    },
    {
        path: '/sg',
        component: () => import('../layout/index.vue'),
        name: 'sg',
        meta: {
            title: '三國',
            hidden: false,
            icon: 'Trophy',
        },
        redirect: '/sg/article',
        children: [
            {
                path: '/sg/article',
                component: () => import('../views/sg/article/index.vue'),
                name: 'article',
                meta: {
                    title: '文章',
                    hidden: false,
                    icon: 'Memo',
                },
            },
            {
                path: '/sg/image',
                component: () => import('../views/sg/image/index.vue'),
                name: 'image',
                meta: {
                    title: '圖片',
                    hidden: false,
                    icon: 'Picture',
                },
            },
        ],
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