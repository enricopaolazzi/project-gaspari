import { RouteRecordRaw } from 'vue-router'

import RegionIndex from '../../../views/Anagraphics/Localizations/Regions/RegionIndex.vue';

const Localizations : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/localizzazioni/regioni',
		name: 'anagraphics.localizations.regions.index',
		component: RegionIndex,
		meta: {
			title: 'Regioni'
		}		
	}    
];

export default Localizations;