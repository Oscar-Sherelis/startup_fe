import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true, dialog: true, injectModalsContainer: true })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
