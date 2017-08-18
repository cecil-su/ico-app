// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import 'lib-flexible'
import componentInstall from './components'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import utils from './utils.js'
Vue.use(mintui)
Vue.use(componentInstall)
Vue.prototype.$app = utils
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://icoapi.3721w.com/'
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
axios.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
