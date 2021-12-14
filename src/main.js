import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
