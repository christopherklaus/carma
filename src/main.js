import Vue from 'vue'
import App from './App.vue'
import Dashboard from './components/dashboard.vue'
import Friends from './Friends.vue'
import List from './List.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Dashboard },
  { path: '/friends', component: Friends },
  { path: '/list', component: List }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
