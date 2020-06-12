import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/home'
import Ages from '@pages/ages'
import User from '@pages/users'
Vue.use(Router);
export default new Router({
    routes:[
        {path: '*', redirect: '/home'},
        {path:'/home', name:'home', component:Home},
        {path:'/ages', name:'ages', component:Ages},
        {path:'/user', name:'user', component:User},
    ]
})