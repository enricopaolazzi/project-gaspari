import { RouteRecordRaw } from 'vue-router'

import CityIndex from '../../../views/Anagraphics/Localizations/Cities/CityIndex.vue';

const Localizations : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/localizzazioni/citta',
		name: 'anagraphics.localizations.cities.index',
		component: CityIndex,
		meta: {
			title: 'Città'
		}		
	}    
];

export default Localizations;