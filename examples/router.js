import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('./pages/index'),
			children:[{
		    	path: '/me',
		    	name: '/me',
		      	component: () => import('./pages/index')
		    },{
				path: '/dashboard/homepage',
				name: '/dashboard/homepage',
				component: () => import('./pages/dashboard')
		    },{
		    	path: '/me/data-source',
		    	name: '/me/data-source',
		      	component: () => import('./pages/dataSource')
		    },{
		    	path: '/me/connection',
		    	name: '/me/connection',
		      	component: () => import('./pages/connection')
		    },{
		    	path: '/me/board/list',
		    	name: '/me/board/list',
		      	component: () => import('./pages/board')
		    },]
		}
	]
})
