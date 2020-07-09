import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: []
  },
  mutations: {
    SET_CURRENCIES(state) {
      const parsed = JSON.stringify(state.currencies);
      localStorage.setItem('currencies', parsed);
    },
    GET_CURRENCIES(state) {
      if (localStorage.getItem('currencies') != null) {
        state.currencies = JSON.parse(localStorage.getItem('currencies'));
      }
    },
    ADD_CURRENCY(state, payload) {
      payload.id = Math.floor(Math.random()*100);
      state.currencies.push(payload);
    },
    EDIT_CURRENCY(state, payload) {
      state.currencies = state.currencies.map(e => {
        if (e.id != payload.id) return e;
        return payload;
      })
    },
    REMOVE_CURRENCY(state, payload) {
      let removeCurrency = state.currencies.find( e => e.id == payload);
      state.currencies.splice(removeCurrency, 1);
    } 
  },
  actions: {
    addCurrency({commit}, payload) {
      commit("ADD_CURRENCY", payload);
      commit('SET_CURRENCIES')
    },
    editCurrency({commit}, payload) {
      commit("EDIT_CURRENCY", payload);
      commit('SET_CURRENCIES')
    },
    removeCurrency({commit}, payload) {
      commit("REMOVE_CURRENCY", payload)
      commit('SET_CURRENCIES')
    }
  },
  getters: {
    currencies(state) {
      return state.currencies;
    }
  }
})

