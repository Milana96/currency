import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: [
      {
        currencyCode: 'CHF',
        currencySymbol: 'Fr',
        id: Math.random()
      },
      {
        currencyCode: 'EUR',
        currencySymbol: '€',
        id: Math.random()
      },
      {
        currencyCode: 'GBP',
        currencySymbol: '£',
        id: Math.random()
      },
      {
        currencyCode: 'USD',
        currencySymbol: '$',
        id: Math.random()
      }
    ]
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
    addCurrency({state, commit}, payload) {
      state.commit("ADD_CURRENCY", payload);
    },
    editCurrency({state, commit}, payload) {
      state.commit("EDIT_CURRENCY", payload);
    },
    removeCurrency({state, commit}, payload) {
      state.commit("REMOVE_CURRENCY", payload)
    } 
  },
  getters: {
    currencies(state) {
      return state.currencies;
    }
  }
})
