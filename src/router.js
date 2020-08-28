import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

let routes = [
    {path: '/', name: 'Home', component: () => import( "@/views/Home"), meta: {title: '首頁'}},
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
