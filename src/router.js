import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
	routes : [
		{path: '/', name: "home", component: Home},
		{path: '/login', name: "login", component: Login}
	]
})

export default router 