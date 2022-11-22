import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/404/NotFound.vue';

import Clients from './Anagraphics/Clients';
import Agents from './Anagraphics/Agents';
import Localizations from './Anagraphics/Localizations/Localizations';

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
	...Clients,
	/**
	 * AGENTI 
	 * */ 
	...Agents,
	/**
	 * AGENTI 
	 * */ 
	...Localizations

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router