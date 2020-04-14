import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Main from './components/Main/Main';
import InfoPage from './components/InfoPage/InfoPage';
import AboutPage from './components/AboutPage/AboutPage';

const routes = [
    {
        path: '/',
        component: Main,
        name: 'main',
    },
    {
        path: '/info',
        component: InfoPage,
        name: 'info',
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'about',
    },
];

const router = new VueRouter({ routes, mode: 'history' });

Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
