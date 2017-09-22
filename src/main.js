// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Amigos from './components/Amigos.vue'
import Delete from './components/Delete.vue'
import Posible from './components/Posible.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
    routes:[{
        path:'/Amigos',
        name: 'Amigos',
        component: Amigos
    },{
        path:'/Delete',
        name: 'Delete',
        component: Delete
    },{
        path:'/Posible',
        name: 'Posible',
        component: Posible
    }]
});
/* eslint-disable no-new */
new Vue({
    render:h=>h(App),
    router
}).$mount('#app');
