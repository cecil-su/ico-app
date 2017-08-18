import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
  user: '' // 用户信息
}

export default new Vuex.Store({
  state,
  actions
})
