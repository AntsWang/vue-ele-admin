import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../page/login.vue';
import Index from '../page/index.vue';
import Home from '../page/home';
import Config from '../page/config';
import Application from '../page/application';
import Carousel from '../components/carousel.vue';
import Calendar from '../components/calendar.vue';
import Table from '../components/table.vue';
Vue.use(VueRouter);
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/index',
        component: Index,
        children: [
            { path: '/home', component: Home },
            { path: '/config', component: Config, meta: { requiresAuth: true } },
            { path: '/application', component: Application },
            { path: '/carousel', component: Carousel },
            { path: '/calendar', component: Calendar },
            { path: '/table', component: Table }
        ]
    },

]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    console.log(to, from.next);
    if (to.meta.requiresAuth) {
        console.log(localStorage.getItem("token"));
        if (localStorage.getItem("token") != '') {
            next()
        } else {
            next({ path: '/login', query: to.fullPath })
        }
    } else {
        next()
    }
    // ...
})
export default router;