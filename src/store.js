import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations} from 'vuexfire'

import search from './stores/modules/search/search'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {

  },
  modules: {
    search
  }
})
