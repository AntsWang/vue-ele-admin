import Vue from 'vue'
import router from './router/router';
import App from './App.vue'
import echarts from 'echarts'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
