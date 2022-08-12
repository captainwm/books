import VueRouter from "vue-router"
import first from "../../components/first.vue"
import index from "../../components/index.vue"
import sort from "../../components/sort.vue"
import list from "../../components/list.vue"
import service from "../../components/service.vue"
import shop from "../../components/shop.vue"
import my from "../../components/my.vue"
import detail from "../../components/detail.vue"
import login from "../../components/login.vue"
import register from "../../components/register.vue"

// import VueRouter from "vue-router"
export default new VueRouter({
	routes: [{
			path: '/',
			component: first,
			children: [{
					path: '/index',
					component: index

					// children: [{
					// 	path: '/shop',
					// 	component: shop
					// }]
				},
				{
					path: '/sort',
					component: sort
				},
				{
					path: '/my',
					component: my
				}
			],
			redirect: '/index'
		},
		{
			path: '/service',
			component: service
		},
		{
			path: '/list',
			component: list
		},
		{
			path: '/detail',
			component: detail
		},
		{
			path: '/shop',
			component: shop
		},
		{
			path: '/login',
			component: login
		},
		{
			path: '/register',
			component: register
		},
		// {
		// 	path: '/my',
		// 	component: my
		// },
		// {
		// 	path: '/shop',
		// 	component: shop
		// },
		{
			path: "/*",
			redirect: '/index'
		}

	]
})
