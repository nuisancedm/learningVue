import Vue from 'vue'
import App from './App.vue'
import mybtn from './components/button'

Vue.config.productionTip = false
Vue.use(mybtn)
new Vue({
  render: h => h(App),
}).$mount('#app')
