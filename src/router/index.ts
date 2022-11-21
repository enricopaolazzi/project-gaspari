import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/404/NotFound.vue';

import Clients from './Anagraphics/Clients';

const routes: Array<RouteRecordRaw> = [
	/**
	 * 404 
	 * */
	{ 
		path: '/:pathMatch(.*)*', 
		name: '404', 
		component: NotFound 
	}, 
	/**
	 * HOME 
	 * */ 
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	/**
	 * CLIENTI 
	 * */ 
	...Clients
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
