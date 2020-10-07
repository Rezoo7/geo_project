import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.API_key_AMP ,
    libraries: "places" // necessary for places input
  }
});

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
