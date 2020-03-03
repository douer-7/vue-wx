import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Pay = () => import('../views/pay/Pay')
const userCenter = () => import('../views/userCenter/userCenter')

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [{
        path: '',
        redireact: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/pay',
        component: Pay
    },
    {
        path: '/userCenter',
        component: userCenter
    },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

//导出
export default router