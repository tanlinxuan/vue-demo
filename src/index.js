import Vue from 'vue'
import app from './app.vue'
import router from '@router/router'

new Vue({
    el:'#app',
    router,
    render:(h)=>h(app)
})