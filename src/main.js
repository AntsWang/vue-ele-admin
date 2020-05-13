import Vue from 'vue'
import store from './store/index';
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
  store,
  render: h => h(App)
}).$mount('#app')
