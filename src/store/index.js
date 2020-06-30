import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: [],
    // showCurrencies
  },
  mutations: {
    ADD_CURRENCY(state, payload) {
      state.currencies.push(payload);
    },
    EDIT_CURRENCY(state, payload) {
      state.currencies = state.currencies.map(e => {
        if (e.id != payload.id) return e;
        return payload;
      })
    },
    REMOVE_CURRENCY(state, payload) {
      state.currencies = state.currencies.find( e => e.id != payload);
    } 
  },
  actions: {
    addCurrency({commit}, payload) {
      commit("ADD_CURRENCY", payload);
    },
    editCurrency({commit}, payload) {
      commit("EDIT_CURRENCY", payload);
    },
    removeCurrency({commit}, payload) {
      commit("REMOVE_CURRENCY", payload)
    } 
  },
  getters: {
    currencies(state) {
      return state.currencies;
    }
  }
})
