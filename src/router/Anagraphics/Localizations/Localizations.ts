import { RouteRecordRaw } from 'vue-router'

import LocalizationsView from '../../../views/Anagraphics/Localizations/LocalizationsView.vue';

import Cities from './Cities';

const Localizations : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/localizzazioni',
		name: 'anagraphics.localizations',
		component: LocalizationsView,	
		meta: {
			title: 'Localizzazioni'
		}	
	},
	/**
	 * CITTA'
	 */
	...Cities
    // {
	// 	path: '/anagrafiche/clienti/crea',
    //     name: 'anagraphics.Localizations.create',
    //     component: ClientCreate
	// },
	// {
	// 	path: '/anagrafiche/clienti/:id',
	// 	name: 'anagraphics.clients.edit',
	// 	props: true,
	// 	component: ClientEdit,    
	// }
];

export default Localizations;