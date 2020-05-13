import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component:() => import('../page/login') },
    {
        path: '/index',
        component: () => import('../page/index'),
        children: [
            { path: '/home', component: () => import('../page/home') },
            { path: '/config', component: () => import('../page/config'), meta: { requiresAuth: true } },
            { path: '/application', component: () => import('../page/application') },
            { path: '/carousel', component: () => import('../components/carousel') },
            { path: '/calendar', component: () => import('../components/calendar') },
            { path: '/table', component: () => import('../components/table') }
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
        if (localStorage.getItem("token")) {
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