import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Chat = () => import('../views/chat/Chat')
const Discovery = () => import('../views/discovery/Discovery')
const Friends = () => import('../views/friends/Friends')
const UserCenter = () => import('../views/userCenter/UserCenter')
const Pay = () => import('../views/pay/Pay')
const Cards = () => import('../views/cards/Cards')
const Setting = () => import('../views/setting/Setting')

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
        path: '/chat/:wxid',
        component: Chat,
        props: true,
        meta: {
            keepAlive: false
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
        },
    },
    {
        path: '/pay',
        component: Pay,
    },
    {
        path: '/cards',
        component: Cards,
    },
    {
        path: '/setting',
        component: Setting,
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history',
    // base: '/vue-wx/'  
})

//导出
export default router