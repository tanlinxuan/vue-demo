import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/home.vue'
import Ages from '@pages/ages.vue'
Vue.use(Router);
export default new Router({
    routes:[
        {path:'/', name:'home', component:Home},
        {path:'/ages', name:'ages', component:Ages},
    ]
})