import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.px.css'
// import Vant from "vant"
Vue.config.productionTip = false
Vue.use(YDUI)
// Vue.use(Vant)
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
