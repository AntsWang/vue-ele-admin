import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../page/home';
import Config from '../page/config';
import Application from '../page/application';
Vue.use(VueRouter);
const routes = [
    { path: '/', redirect:'/home' },
    { path: '/home', component:Home },
    { path: '/config', component: Config },
    { path: '/application', component: Application }
]

const router = new VueRouter({
    routes
})

export default router;