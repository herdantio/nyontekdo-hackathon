// external library
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

// internal
import App from './App.vue'
import router from './router'
import store from './store'
import {MAP_API_KEY} from './lib/config/config'

// css
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: MAP_API_KEY,
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
