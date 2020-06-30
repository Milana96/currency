import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Currencies from '../components/Currencies.vue'
import add from '../components/currencies/add.vue'
import edit from '../components/currencies/edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/currencies',
    name: 'Currencies',
    component: Currencies
  },
  {
    path: '/currencies/add',
    name: 'Add',
    component: add
  },
  {
    path: '/currencies/:id',
    name: 'Edit',
    component: edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
