import { RouteRecordRaw } from 'vue-router'

import CountryIndex from '../../../views/Anagraphics/Localizations/Countries/CountryIndex.vue';

const Localizations : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/localizzazioni/nazioni',
		name: 'anagraphics.localizations.countries.index',
		component: CountryIndex,
		meta: {
			title: 'Nazioni'
		}		
	}    
];

export default Localizations;