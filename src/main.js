// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Delete from './components/Delete.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
    routes:[{
        path:'/add',
        name: 'add',
        component: Add
    },{
        path:'/update',
        name: 'update',
        component: Update
    },{
        path:'/delete',
        name: 'delete',
        component: Delete
    }]
});
/* eslint-disable no-new */
new Vue({
    render:h=>h(App),
    router
}).$mount('#app');
