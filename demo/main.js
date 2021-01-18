import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

const vuetify = new Vuetify(opts)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
