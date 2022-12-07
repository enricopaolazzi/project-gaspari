import { RouteRecordRaw } from 'vue-router'

import LocalizationsView from '../../../views/Anagraphics/Localizations/LocalizationsView.vue';

import Cities from './Cities';
import Regions from './Regions';
import Countries from './Countries';
import Provinces from './Provinces';

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
	...Cities,
	/**
	 * REGIONI
	 */
	...Regions,
    /**
	 * NAZIONI
	 */
	...Countries,
	/**
	 * PROVINCE
	 */
	...Provinces
];

export default Localizations;