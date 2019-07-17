import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWord.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'main',
			component: HelloWorld
		}
	]
})