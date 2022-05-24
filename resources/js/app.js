require('./bootstrap');
//import vue from 'vue';
//window.Vue = vue;

import App from './components/App.vue';

//importamos Axios
//import VueAxios from 'vue-axios';
//import axios from 'axios';

//importamos y configuramos el v router

import * as VueRouter from 'vue-router';
import * as  Vue from 'vue';
//import { routes } from './routes';

const routes = [
    // TODO
  ];

// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);

// const router = new VueRouter({
//     mode:'history',
//     routes: routes
// });

// const app = new Vue({
//     el: '#app',
//     router:router,
//     render: h => h(App)
// });

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
  });

Vue.createApp(App).use(router).mount('#app');
