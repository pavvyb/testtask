import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
  },
  mutations: {
    setAuthorized: (state, newValue) => {
      state.authorized = newValue
    }
  }
})
