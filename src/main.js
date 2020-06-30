import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/scss/index.scss';
import { BootstrapVue } from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle, faEuroSign);
Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
