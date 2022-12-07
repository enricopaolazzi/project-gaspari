import { RouteRecordRaw } from 'vue-router'

import ProvinceIndex from '../../../views/Anagraphics/Localizations/Provinces/ProvinceIndex.vue';

const Localizations : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/localizzazioni/province',
		name: 'anagraphics.localizations.provinces.index',
		component: ProvinceIndex,
		meta: {
			title: 'Province'
		}		
	}    
];

export default Localizations;