import Vue from 'vue'
import Vuex from 'vuex'
import {
    request
} from '@/network/request'


// 安装插件
Vue.use(Vuex)

//创建对象

const store = new Vuex.Store({
    state: {
        isLoading: false,
        userInfo: {
            nickName: '',
            wxNum: '',
            wxId: ''
        },
    },
    getters: {
        // 相当于 compute 筛选\计算\
        // getters也可以作为参数
        // 使用：$store.getters.powTest
        // 参数(state,getters)
    },
    mutations: {
        // 唯一更新store的方式
        // 只能同步操作 
        // 使用: this.$store.commit('onadd')
        // 参数(state,载荷payload)
        updateLoading(state, payload) {
            state.isLoading = payload
        },

        updateUserInfo(state, payload) {
            state.userInfo = payload
        },
    },
    actions: {
        //异步操作
        getUserInfo(context) {
            request({
                url: '/getUserInfo'
            }).then(res => {
                context.commit('updateUserInfo', res.data.data)
                context.commit('updateLoading', false)
            }).catch(err => {
                console.log('失败', err);
            })
        },
    },
    modules: {

    }
})

export default store