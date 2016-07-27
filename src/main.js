import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './app.vue';
import home from './components/home.vue';
import list from './components/list.vue';
import hello from './components/hello.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

var app = Vue.extend(App);

var router = new VueRouter();

//配置路由
router.map({
    '/home':{
        component:home
    },
    '/list':{
        component:list
    },
    '/hello':{
        component:hello
    }
})

router.redirect({
    '/':'home'
})

router.start(app,'#app');
window.router = router;