import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: [],
    // showCurrencies
  },
  mutations: {
    // INITIALISE_STORE(state) {
		// 	// Check if the ID exists
		// 	if(localStorage.getItem('currencies')) {
		// 		// Replace the state object with the stored item
		// 		this.replaceState(
		// 			Object.assign(state.currencies, JSON.parse(localStorage.getItem('currencies')))
		// 		);
		// 	}
    // },
    SET_CURRENCIES(state, payload) {
      const parsed = JSON.stringify(payload)
      localStorage.setItem('currencies', parsed);
    },
    ADD_CURRENCY(state, payload) {
      payload.id = Math.random();
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
      // commit('SET_CURRENCIES', payload)
    },
    editCurrency({commit}, payload) {
      commit("EDIT_CURRENCY", payload);
    },
    removeCurrency({commit}, payload) {
      commit("REMOVE_CURRENCY", payload)
    },
    fetchCurrencies({state, commit}) {
      if (localStorage.getItem('currencies') != null) {
        Object.assign(state.currencies, JSON.parse(localStorage.getItem('currencies')))
      }
    }
  },
  getters: {
    currencies(state) {
      return state.currencies;
    }
  }
})

