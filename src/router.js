import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    /*{
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {path: 'sample', name: 'Sample', component: () => import( /!* webpackChunkName: "Sample" *!/"@/views/sample"), meta: {title: '樣板'}},
        ]
    }*/
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router