import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../scripts/firebaseinit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: firebase.auth().currentUser
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
