// external library
import Vue from 'vue'
import Vuetify from 'vuetify'

// internal
import App from './App.vue'
import router from './router'
import store from './store'

// css
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
