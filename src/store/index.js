import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

//创建对象

const store = new Vuex.Store({
    state: {
        userInfo: {
            nickName: '昵称',
            wxNum: 'scscsc',
            wxId: 'scscsc'
        },
        test: [{
            nickName: '',
            wxNum: '',
        }]
    },
    getters: {
        // 相当于 compute 筛选\计算\
        // getters也可以作为参数
        // 使用：$store.getters.powTest
        // 参数(state,getters)
        powTest(state) {
            return state.test * state.test
        },
    },
    mutations: {
        // 唯一更新store的方式
        // 只能同步操作 
        // 使用: this.$store.commit('onadd')
        // 参数(state,载荷payload)

        onMod(state){
            state.userInfo.nickName = 'why'
        },

    },
    actions: {
        //异步操作

    },
    modules: {

    }
})

export default store