import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '../views/404/NotFound.vue';
import OAuthCallbackHandler from '../views/OAuthCallbackHandler/OAuthCallbackHandler.vue';

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
		component: NotFound,
		meta: {
			title: 'Page not found'
		}
	},
	/**
	 * OAUTH CALLBACK
	 * */ 
	{
		path: '/callback',
		name: 'OAuthCallbackHandler',
		component: OAuthCallbackHandler,		
	},
	/**
	 * HOME
	 * */ 
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: {
			title: 'Home'
		}
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
	 * LOCALIZZAZIONI 
	 * */ 
	...Localizations

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Change page Title
const DEFAULT_TITLE = process.env.VUE_APP_NAME;
router.beforeEach((to, from, next) => {
	const title : any = to.meta.title;
	document.title = title ? title + ' - ' + DEFAULT_TITLE : DEFAULT_TITLE;
	next();
});

export default router;