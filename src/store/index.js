import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: []
  },
  mutations: {
    SET_CURRENCIES(state, payload) {
      const parsed = JSON.stringify(payload)
      localStorage.setItem('currencies', parsed);
    },
    GET_CURRENCIES(state) {
      if (localStorage.getItem('currencies') != null) {
        state.currencies.push(JSON.parse(localStorage.getItem('currencies')));
      }
      console.log(state.currencies);
      
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
      let leftCurrency = state.currencies.find( e => e.id != payload);
      state.currencies = leftCurrency;
      console.log(state.currencies);
      
    } 
  },
  actions: {
    addCurrency({commit}, payload) {
      commit("ADD_CURRENCY", payload);
      commit('SET_CURRENCIES', payload)
    },
    editCurrency({commit}, payload) {
      commit("EDIT_CURRENCY", payload);
    },
    removeCurrency({commit}, payload) {
      commit("REMOVE_CURRENCY", payload)
    },
    // fetchCurrencies({state, commit}) {
      
    // }
  },
  getters: {
    currencies(state) {
      return state.currencies;
    }
  }
})

