import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'index',
	      	component: resolve => require(['@/components/index'], resolve)
	    }, {
			path: '/index',
	      	name: 'home',
	      	component: resolve => require(['@/components/index'], resolve)
	    }, {
			path: '/videoGroup',
	      	name: 'videoGroup',
	      	component: resolve => require(['@/components/videoGroup'], resolve)
	    }
  	]
})
