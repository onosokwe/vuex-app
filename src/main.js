import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import Axios from 'axios';

// Configure Vuejs-noty
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.config.productionTip = false;

Vue.use(VueNoty, {
	timeout: 2000,
	progressBar: true,
	layout: 'topRight'
});

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
