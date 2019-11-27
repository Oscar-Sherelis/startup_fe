import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VModal from 'vue-js-modal'
import feather from 'vue-icon'

Vue.use(feather, 'v-icon')
Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true, dialog: true, injectModalsContainer: true })

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () { store.dispatch('COLLECT_PROJECTS') }
}).$mount('#app')
