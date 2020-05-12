import Vue from 'vue'
import router from './router/router';
import App from './App.vue'
import echarts from 'echarts'
import './plugins/element.js';
import Storage from './common/storage';
import Request from './common/http';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$storage = Storage;
Vue.prototype.$request = Request;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
