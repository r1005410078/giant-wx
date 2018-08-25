// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import userinfo from './userinfo/store'
import Combo from './index/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: userinfo,
    combo: Combo
  },
  mutations: {
    addShop (state, payload) {
      Combo.commit('addShop', payload)
    }
  }
})

export default store
