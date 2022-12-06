import { RouteRecordRaw } from 'vue-router'

import ClientIndex from '../../views/Anagraphics/Clients/ClientIndex.vue';
import ClientEdit from '../../views/Anagraphics/Clients/ClientEdit.vue';
import ClientCreate from '../../views/Anagraphics/Clients/ClientCreate.vue';

const Clients : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/clienti',
		name: 'anagraphics.clients.index',
		component: ClientIndex,		
		meta: {
			title: 'Clienti'
		}		
	},
    {
		path: '/anagrafiche/clienti/crea',
        name: 'anagraphics.clients.create',
        component: ClientCreate,
		meta: {
			title: 'Clienti'
		}	
	},
	{
		path: '/anagrafiche/clienti/:id',
		name: 'anagraphics.clients.edit',
		props: true,
		component: ClientEdit,    	
		meta: {
			title: 'Clienti'
		}
	}
];

export default Clients;