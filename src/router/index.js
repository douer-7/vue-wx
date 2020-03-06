import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Discovery = () => import('../views/discovery/Discovery')
const Friends = () => import('../views/friends/Friends')
const UserCenter = () => import('../views/userCenter/UserCenter')
const Chat = () => import('../views/chat/Chat')

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/friends',
        component: Friends,
        meta: {
            keepAlive: true
        }


    },
    {
        path: '/discovery',
        component: Discovery,
        meta: {
            keepAlive: true
        }

    },
    {
        path: '/userCenter',
        component: UserCenter,
        meta: {
            keepAlive: true
        }

    },
    {
        path: '/chat/:wxid',
        component: Chat,
        props: true,
        meta: {
            keepAlive: false
        }

    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/vue-wx/'
})

//导出
export default router