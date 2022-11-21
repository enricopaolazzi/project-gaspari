import { RouteRecordRaw } from 'vue-router'

import ClientIndex from '../../views/Anagraphics/Clients/ClientIndex.vue';
import ClientEdit from '../../views/Anagraphics/Clients/ClientEdit.vue';
import ClientCreate from '../../views/Anagraphics/Clients/ClientCreate.vue';

const Clients : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/clienti',
		name: 'anagraphics.clients.index',
		component: ClientIndex,		
	},
    {
		path: '/anagrafiche/clienti/crea',
        name: 'anagraphics.clients.create',
        component: ClientCreate
	},
	{
		path: '/anagrafiche/clienti/:id',
		name: 'anagraphics.clients.edit',
		props: true,
		component: ClientEdit,    
	}
];

export default Clients;